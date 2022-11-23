<script lang="ts">
  import BlogThumbnail, { Style } from '$components/BlogThumbnail.svelte'
  import type { PageData } from './$types'

  export let data: PageData

  // console.log(data.json)
</script>

{#each data.json as thumbnail}
  <BlogThumbnail
    style={Style.Medium}
    coverImage={thumbnail.cover.file.url}
    title={thumbnail.properties.Name.title[0].plain_text}
    authorImage={thumbnail.author.avatar_url}
    class="m-4"
  />
{/each}
