<script lang="ts" context="module">
  export enum Style {
    Small,
    Medium,
    Large,
  }
</script>

<script lang="ts">
  import BlogThumbnailLarge from "./BlogThumbnailLarge.svelte"
  import BlogThumbnailMedium from "./BlogThumbnailMedium.svelte"
  import BlogThumbnailSmall from "./BlogThumbnailSmall.svelte"
  
  export let style: Style = Style.Medium
  export let coverImage: string
  export let title = 'This in an example title.'
  export let text =
    'This is example text talking about our blog post. We will talk about interesting things here. Click to read more. yada yada \
  yad yad ya ya ya'
  export let authorImage: string
  export let author = 'Author Name'

  $: thumbnailSize = [
    BlogThumbnailSmall,
    BlogThumbnailMedium,
    BlogThumbnailLarge,
  ][style];

</script>

<style>
  /* adds drop shadow and hover animation */
  .shadow {
    transition: filter 0.3s ease;
    filter: drop-shadow(2px 2px 15px rgba(0, 0, 0, 0.25));
  }
  .shadow:hover {
    transition: filter 0.3s ease;
    filter: drop-shadow(2px 2px 15px rgba(0, 0, 80, 0.4));
  }
</style>

<div class='shadow inline-block'>
  <svelte:component class="{$$props.class}" this={thumbnailSize} {coverImage} {title} {text} {authorImage} {author} />
</div>
