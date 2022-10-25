import adapter from '@sveltejs/adapter-static'
import preprocess from 'svelte-preprocess'
import path from 'path'

const dev = process.env.NODE_ENV === 'development'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess({
    postcss: true
  }),

  kit: {
    alias: {
      $components: path.resolve('./src/lib/components/')
    },

    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: '200.html',
      precompress: false
    }),
    prerender: {
      default: true
    },
    trailingSlash: 'always',
    paths: {
      base: dev ? '/' : '' //'/machine-craft-nw-site'
    },
    appDir: 'internal'
  }
}

export default config
