<script>
  import Preview from '$components/landing-only/Preview.svelte'
  import Plastic from '$assets/small-plastic.jpg'
  import Shop from '$assets/shop.jpg'
  import Milling from '$assets/milling-preview.jpg'
</script>

<main class="flex">
  <Preview
    title="The work"
    text="Check out the wildly successful stories our clients have."
    buttonText="Portfolio"
    imgOpacity={0.9}
    backgroundImg={Plastic}
  />
  <Preview
    title="The Shop"
    text="Get familiar with our production facility."
    buttonText="Virtual Tour"
    imgOpacity={0.8}
    backgroundImg={Shop}
  />
  <Preview
    title="The Machines"
    text="See our capabilities"
    buttonText="List of Machines"
    imgOpacity={0.8}
    backgroundImg={Milling}
  />
</main>
