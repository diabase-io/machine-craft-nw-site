import type { LayoutLoad } from '../../.svelte-kit/types/src/routes/$types';

// these are page options. Read: https://kit.svelte.dev/docs/page-options
// more info for these exports, read: https://github.com/sveltejs/kit/pull/6197
// export const csr = true;
// export const prerender = true;  

export const load: LayoutLoad = async () => {
    const response = await fetch('/api/thumbnails', { method: 'GET' })
    if (response.ok) {
        return { json: await response.json() }
    }
    //
    else {
        console.log('There were no blog posts to get.')
        // TODO: do something!
    }
};