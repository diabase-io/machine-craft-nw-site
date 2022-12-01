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
  const pages = await NOTION_CLIENT.databases
    .query({
      database_id: BLOGS_DATABASE_ID,
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
    const response = await NOTION_CLIENT.users.retrieve({ user_id: pages.results[i].created_by.id })
    Object.assign(pages.results[i], { author: response })
  }

  // we got the pages successfully, replace old blog pages
  if (pages) {
    return json(pages.results)
  }
}
