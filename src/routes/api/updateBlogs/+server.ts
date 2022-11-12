import { NOTION_DATABASE_ID, NOTION_KEY } from '$env/static/private';
import { Client } from '@notionhq/client'
import { NotionToMarkdown } from "notion-to-md";
import * as fs from 'node:fs';
import * as path from 'node:path'
import type { PageObjectResponse, PartialPageObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import { BLOGS_DIR } from '$lib/constants';
import { stringify } from 'postcss';
import { json } from '@sveltejs/kit';

const notionClient = new Client({ auth: NOTION_KEY });
const notion2md = new NotionToMarkdown({notionClient: notionClient});

/** 
 * Pulls all the blog posts from the Notion integration and writes them 
 * to the server.
 * 
 * @type {import('./$types').RequestHandler}
 */
 export async function GET() {
    console.log("getting blogs...");

    // gets all published pages
    const pages = await notionClient.databases.query({
        database_id: NOTION_DATABASE_ID,
        filter: {
            or: [{
            property: 'Published',
                checkbox: {
                    equals: true,
                }
            }]},
    }).catch(() => {
        console.error("Couldn't get pages from Notion. Are you connected to the internet?");
    });


    // we got the pages successfully, replace old blog pages
    if (pages) {
        updateBlogDirectory(pages.results, BLOGS_DIR)
    }

    return json(pages.results);
}

/**
 * Deletes all the blog posts at blogsDir and writes each page in pages
 * as a markdown file to the same directory.
 * 
 * @param pages An array of Notion page objects
 * @param blogsDir The path to the blog posts (e.g.: 'src/lib/blogs')
 */
function updateBlogDirectory(pages: PageObjectResponse | PartialPageObjectResponse[],
    blogsDir: string)
{
    blogsDir = path.join(process.cwd(), '/', blogsDir)

    // gets each file in blogsDir then deletes them
    fs.readdir(blogsDir, (err, files) => {
        if (err) { console.error(err) }
        else {
            // deletes each file
            for (const file of files) {
                fs.unlink(path.join(blogsDir, file), err => {
                    if (err) { console.error(err) }
                });
            }
        }
    });
    // writes the title, coverImg, and content of each page to a markdown file
    pages.forEach(async page => {
        
        let title = 'untitled';
        let cover;
        let content;

        // page properties are dynamic based on database, I don't think these object
        // structures will ever change, but I could be wrong.

        // notion title could be empty
        if (page.properties.Name.title[0]) {
            title = page.properties.Name.title[0].plain_text;
        }
        // notion page could be lacking a cover image
        if (page.cover) {
            cover = page.cover.file.url;
        }
        // calls notion api and gets page content in markdown formate
        content = notion2md.toMarkdownString(await notion2md.pageToMarkdown(page.id));

        // TODO: append title and cover image at the beginning
        // writes each page to the blog
        fs.writeFile(path.join(blogsDir, page.id + '.md'), content, (err) => {
            if (err) {
                console.log(err)
            }
        });
    })
    console.log('blogs updated')
}
