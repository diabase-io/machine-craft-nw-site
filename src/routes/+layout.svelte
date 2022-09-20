<script lang="ts">
  import '../app.css'
  import { NavBar, Footer } from '$lib/components'
</script>

<svelte:head>
  <title>Machine Craft Northwest</title>
</svelte:head>

<main class="min-h-screen w-full">
  <div class="alert alert-info shadow-lg">
    Be sure to check out the virutual tour!
  </div>
  <NavBar>
    <slot />
  </NavBar>
  <Footer />
</main>
