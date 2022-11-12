import type { PageLoad } from './$types';

export const load: PageLoad = async ({fetch}) => {

    const response = await fetch('/api/thumbnails', {method: 'GET'})
    if (response.ok) {
        return {json: await response.json()}
    }
    else {
        // TODO: do something!
    }
};