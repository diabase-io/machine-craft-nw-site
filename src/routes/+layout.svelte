<script lang="ts">
  import '../app.css'
  import { NavBar, Footer } from '$lib/components'
</script>

<main class="min-h-screen w-full">
  <NavBar />
  <slot />
  <Footer />
</main>
