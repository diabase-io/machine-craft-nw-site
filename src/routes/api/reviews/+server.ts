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
  const response = await NOTION_CLIENT.databases
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
  if (response) {
    let reviews = []

        // gets each important property from reviews.results and maps them to the reviews array to
        // simplify the property lookup process later on
        for (let i = 0; i < response.results.length; i++) {
            reviews[i] = {}

            // gets the title
            Object.assign(reviews[i], { title: response.results[i].properties.Name.title[0].plain_text})
            Object.assign(reviews[i], { reviewerImage: response.results[i].properties['Reviewer Picture'].files[0].file.url})
            Object.assign(reviews[i], { shortText: response.results[i].properties['Short Text'].rich_text[0].plain_text})
            Object.assign(reviews[i], { reviewerName: response.results[i].properties['Person'].rich_text[0].plain_text})
            Object.assign(reviews[i], { company: response.results[i].properties['Company'].rich_text[0].plain_text})
            Object.assign(reviews[i], { showOnWorkPage: response.results[i].properties['Show On'].select.name === 'Work Page'})
        }

    return json(reviews)
  }
}
