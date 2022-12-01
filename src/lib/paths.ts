import type { Page } from '@sveltejs/kit'
import type { Readable } from 'svelte/store'

/**
 * Gets the current route and checks if it equal to a specified route.
 *
 * @param route The route to specify.
 * @returns True if the current route equals the given route parameter.
 */
export const isCurrentRoute = (page: Readable<Page>, route: string) => {
  let currentRoute: string | null
  let isEqual = false

  page.subscribe((value) => {
    currentRoute = value.route.id
    if (currentRoute && currentRoute.replaceAll(/\(.*\)\/?/g, '') === route) {
      isEqual = true
    }
  })
  return isEqual
}

export const API = {
  blogs: '/api/blogs',
  reviews: '/api/reviews'
}

export const PATHS = {
  home: '/',
  work: '/work',
  shop: '/shop',
  machines: '/machines',
  blog: '/blog'
}
