# Tech stack and plugins

- Svelte/SvelteKit
- Typescript
- TailwindCSS
- Yarn
- Prettier
  - plugin: `prettier-plugin-tailwindcss`, which also packages `prettier-plugin-svelte`
- Eslint

# Good to knows

`dsk:` breakpoint we use to signify desktop mode, same as `xl:` breakpoint

See `svelte.config.js` for a list of route aliases. These get used throughout the program (treat
them like constants)

### Routing

When routing, use the PATHS and API constant variables. That way if a directory route changes,
instead of finding every place we called that route and changing it, we can just change one
variable. This doesn't apply for routes such as `/(pages)/work`. You could move `work` to `/work`
or `/(other)/work` without needing to change the PATHS constant. This is because we have helper
functions defined in `paths.ts` which account for the `(...)` in paths.

### Margins

To maintain low coupling and high cohesion, don't design components and pages with responsive
margins within them. Pass margins as classes on the component where ever it's used.

# Blog Posts Rendered With Markdown

This site uses mdsvex in the backend which allows Markdown files to be used at HTML files and svelte components. Installed with `yarn add mdsvex`

We use `notion-to-md` to convert notion pages sent from the api to markdown.
`svelte.config.js` file (see comments there).
