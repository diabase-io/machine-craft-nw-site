import type { LayoutLoad } from '../../.svelte-kit/types/src/routes/$types';

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