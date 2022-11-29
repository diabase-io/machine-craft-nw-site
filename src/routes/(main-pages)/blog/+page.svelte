<script lang="ts">
  import { InfoPageHeader, BlogThumbnail } from '$components'
  import { Style } from '$components/BlogThumbnail.svelte'
  import type { PageData } from './$types'

  export let data: PageData

  // console.log(data.json)
</script>

<InfoPageHeader class='' title="THE BLOG" titleFont={280}/>

<!-- Subtitle and search bar -->
<div class='flex gap-10 justify-center'>
  <h1 class='text-[50px]'>OUR BEST PROJECTS, ON DISPLAY</h1>
  <div class='flex flex-col justify-center'>
    <input class='w-[440px] h-12 border border-gray-400 rounded-lg' />
  </div>
</div>

<div class='w-[1360px] mx-auto'>  
  {#each data.json as thumbnail, i}
    <BlogThumbnail
      style={i == 0 ? Style.Large : Style.Medium}
      coverImage={thumbnail.cover.file.url}
      title={thumbnail.properties.Name.title[0].plain_text}
      authorImage={thumbnail.author.avatar_url}
      class="m-4"
    />
    {#if i == 0}
      <br>
    {/if}
  {/each}
</div>
