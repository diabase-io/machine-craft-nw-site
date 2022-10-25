<script lang="ts">
  import '../app.css'
  import '@fontsource/maven-pro/400.css'
  import '@fontsource/maven-pro/500.css'
  import '@fontsource/maven-pro/600.css'
  import '@fontsource/maven-pro/700.css'
  import '@fontsource/maven-pro/800.css'
  import '@fontsource/maven-pro/900.css'

  import { NavBar, Footer } from '$components'
</script>

<svelte:head>
  <title>Machine Craft Northwest</title>
</svelte:head>

<main>
  <NavBar>
    <slot />
    <Footer />
  </NavBar>

</main>
