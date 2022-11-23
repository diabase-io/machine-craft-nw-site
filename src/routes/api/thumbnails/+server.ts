import { NOTION_DATABASE_ID, NOTION_KEY } from '$env/static/private'
import { Client } from '@notionhq/client'
import type { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints'
import { json } from '@sveltejs/kit'

const notionClient = new Client({ auth: NOTION_KEY })

/**
 * Gets the meta data for each blog post.
 *
 * @type {import('./$types').RequestHandler}
 */
export async function GET() {
  console.log('getting blogs...')

  // gets all published pages
  const pages = await notionClient.databases
    .query({
      database_id: NOTION_DATABASE_ID,
      filter: {
        or: [
          {
            property: 'Published',
            checkbox: {
              equals: true
            }
          }
        ]
      }
    })
    .catch(() => {
      console.error("Couldn't get pages from Notion. Are you connected to the internet?")
    })

  // gets the author of each page and appends it to the object
  for (let i = 0; i < pages.results.length; i++) {
    const response = await notionClient.users.retrieve({ user_id: pages.results[i].created_by.id })
    Object.assign(pages.results[i], { author: response })
    console.log(pages.results[i])
    console.log(response)
  }

  // we got the pages successfully, replace old blog pages
  if (pages) {
    return json(pages.results)
  }
}
