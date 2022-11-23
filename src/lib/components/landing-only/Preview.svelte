<!-- 
  @component
  
  A full height, 1/3 screen width frame with an image as a background meant to draw
  in the user's attention. Hovering over this slightly zooms in the image and animates
  in text and a button.
 -->
<script lang="ts">
  export let title = 'Title'

  export let text = 'text'

  export let buttonText = 'Button'

  export let backgroundImg: string

  export let imgOpacity = 1.0

  /** Href is for the button. */
  export let href = '/'
</script>

<style>
  /* animates image zoom */
  main:hover > img {
    transition: 4s transform ease-out;
    transform: scale(110%);
  }
  main > img {
    transition: 1.5s transform ease;
    transform: scale(100%);
  }

  /* animates button & text fade */
  main:hover > div > div {
    transition: 0.4s opacity ease;
    opacity: 1;
  }
  main > div > div {
    transition: 0.4s opacity ease;
    opacity: 0;
  }
</style>

<main class="relative h-screen w-1/3 overflow-hidden bg-black text-white">
  <img alt="" src={backgroundImg} style="opacity: {imgOpacity}" class="h-full object-cover" />
  <div class="absolute top-[60%] left-[18%] w-2/3 text-[22px]">
    <h1 class="uppercase">{title}</h1>
    <div>
      <p>{text}</p>
      <a {href} class="btn btn-primary text-xl normal-case">{buttonText}</a>
    </div>
  </div>
</main>
