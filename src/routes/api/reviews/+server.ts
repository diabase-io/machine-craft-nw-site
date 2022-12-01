import { REVIEWS_DATABASE_ID } from '$env/static/private'
import { NOTION_CLIENT } from '$lib/constants'
import { json } from '@sveltejs/kit'

/**
 * gets testimonials
 *
 * @type {import('./$types').RequestHandler}
 */
export async function GET() {
  console.log('getting testimonials...')

  // gets all published testimonials
  const reviews = await NOTION_CLIENT.databases
    .query({
      database_id: REVIEWS_DATABASE_ID,
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
      console.error("Couldn't get testimonials from Notion. Are you connected to the internet?")
    })
  // success at getting reviews
  if (reviews) {
    return json(reviews.results)
  }
}
