<script lang="ts">

  import type { PageData } from './$types';

  export let data: PageData;

  console.log(data.json)
</script>

{#each data.json as thumbnail}
  {thumbnail.properties.Name.title[0].plain_text}, {thumbnail.cover.file.url}<br><br>
{/each}
