<script lang="ts">
  import '../app.css'
  import { NavBar, Footer } from '$components'

  let height = 84;
</script>

<svelte:head>
  <title>Machine Craft Northwest</title>
</svelte:head>

<main>
  <NavBar {height}/>
  <div class='xl:pt-[84px]'>
    <slot />
  </div>
  <Footer />
</main>
