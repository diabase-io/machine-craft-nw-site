<script lang="ts">
    import Test from '$components/Test.md'
import type { PageData } from './$types';
    // import blog from 'src/lib/blogs/847aba8b-9b2d-4b03-9953-acd215fe1050';
    import duh from '$lib/blogs/duh.md';

    export let data: PageData;
  </script>
  
<svelte:component this={duh}></svelte:component>
