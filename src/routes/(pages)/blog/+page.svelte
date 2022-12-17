<script lang="ts">
  import { InfoPageHeader, BlogThumbnail } from '$components'
  import { Style } from '$components/BlogThumbnail.svelte'
  import type { LayoutData } from '../$types'

  export let data: LayoutData
</script>

<main>
  <InfoPageHeader class="" title="THE BLOG" titleFont={280} />

  <!-- Subtitle and search bar -->
  <div class="sticky top-20 z-50 mb-5 flex justify-center gap-10 bg-white">
    <h1 class="text-[50px]">OUR BEST PROJECTS, ON DISPLAY</h1>
    <div class="flex flex-col justify-center">
      <input class="h-12 w-[440px] rounded-lg border border-gray-400" />
    </div>
  </div>

  <div class="mx-auto w-[1360px]">
    {#each data.blogs as blog, i}
      <BlogThumbnail
        style={i == 0 ? Style.Large : Style.Medium}
        coverImage={blog.coverImage}
        title={blog.title}
        authorImage={blog.authorImage}
        class="m-4"
      />
      {#if i == 0}
        <br />
      {/if}
    {/each}
  </div>
</main>
