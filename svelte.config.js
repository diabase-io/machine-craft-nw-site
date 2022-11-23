import adapter from '@sveltejs/adapter-static'
import preprocess from 'svelte-preprocess'
import path from 'path'
import { mdsvex } from 'mdsvex'


const dev = process.env.NODE_ENV === 'development'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [
    preprocess({
      postcss: true
    }),
    // allows rendering markdown
    mdsvex({
      extensions: ['.md']
    }),
  ],
  // allows rendering markdown
  extensions: ['.svelte', '.md'],

  kit: {
    alias: {
      $components: path.resolve('./src/lib/components/'),
      $lib: path.resolve('./src/lib/'),
      $assets: path.resolve('./src/lib/assets'),
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
