/**
 * TODO: this causes the page to load slowly when first visiting. It's not a big deal but
 * if Notion isn't working for some reason then the website just won't load.
 */

import { API } from '$lib/paths'
import type { LayoutLoad } from './$types'

// these are page options. Read: https://kit.svelte.dev/docs/page-options
// more info for these exports, read: https://github.com/sveltejs/kit/pull/6197
// export const csr = true;
// export const prerender = true;

export const load: LayoutLoad = async ({ fetch }) => {
  const response = await fetch(API.blogs, { method: 'GET' })
  if (response.ok) {
    return { blogs: await response.json() }
  }
  //
  else {
    console.log('There were no blog posts to get.')
    // TODO: do something!
  }
}
