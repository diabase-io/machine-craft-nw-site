import { BLOGS_DIR } from 'src/constants'
import { error } from '@sveltejs/kit'
import type { PageLoad } from './$types'

export const load: PageLoad = async ({ params }) => {
  // const post = await import(`/src/lib/blogs/847aba8b-9b2d-4b03-9953-acd215fe1050.md`)
  // console.log(post.metadata)
  // if (post) {
  return {
    post: ''
  }
  // }
  throw error(404, 'Not found')
}
