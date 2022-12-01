<!-- Landing Page -->
<script lang="ts">
  import Hero from '$components/landing-only/Hero.svelte'
  import Certs from '$components/landing-only/Certs.svelte'
  import TriplePreview from '$components/landing-only/TriplePreview.svelte'
  import ContactSection from '$components/ContactSection.svelte'
</script>

<main>
  <Hero />
  <Certs />
  <TriplePreview />
  <br />
  <br />
  <br />
  <br />
  <br />
  <ContactSection showAddress={false} />
</main>
