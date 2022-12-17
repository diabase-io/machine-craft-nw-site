import { BLOGS_DATABASE_ID } from '$env/static/private'
import { NOTION_CLIENT } from '$lib/constants'
import { json } from '@sveltejs/kit'

/**
 * Gets the meta data for each blog post.
 *
 * @type {import('./$types').RequestHandler}
 */
export async function GET() {
  console.log('getting blogs...')

  // gets all published pages
    const pages = await NOTION_CLIENT.databases.query({
    database_id: BLOGS_DATABASE_ID,
    filter: {
        or: [
        {
            property: 'Published',
            checkbox: {
            equals: true
            }
        }]
    }
    })
    .catch(() => {
    console.error("Couldn't get pages from Notion. Are you connected to the internet?")
    })

    // we got the pages successfully
    if (pages) {
        let blogs = []

        // gets each important property from pages.results and maps them to the blogs array to
        // simplify the property lookup process later on
        for (let i = 0; i < pages.results.length; i++) {
            blogs[i] = {}
                    
            // gets the id
            Object.assign(blogs[i], { id: pages.results[i].id })

            // gets the author
            const response = await NOTION_CLIENT.users.retrieve({ user_id: pages.results[i].created_by.id })
            Object.assign(blogs[i], { authorImage: response.avatar_url })
            Object.assign(blogs[i], { authorName: response.name })

            // gets the cover image
            Object.assign(blogs[i], { coverImage: pages.results[i].cover[pages.results[i].cover.type].url})

            // gets the title
            Object.assign(blogs[i], { title: pages.results[i].properties.Name.title[0].plain_text})
        }
        return json(blogs)
    }
}
