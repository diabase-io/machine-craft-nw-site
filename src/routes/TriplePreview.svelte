<script>
  import Preview from "./Preview.svelte"
  import Plastic from "$lib/assets/small-plastic.jpg"
  import Shop from "$lib/assets/shop.jpg"
  import Milling from "$lib/assets/milling-preview.jpg"

</script>

<main class='flex'>
  <Preview title='The work'
    text='Check out the wildly successful stories our clients have.'
    buttonText='Portfolio'
    imgOpacity={.9}
    backgroundImg={Plastic}
  />
  <Preview title='The Shop'
    text='Get familiar with our production facility.'
    buttonText='Virtual Tour'
    imgOpacity={.8}
    backgroundImg={Shop}
  />
  <Preview title='The Machines'
    text='See our capabilities'
    buttonText='List of Machines'
    imgOpacity={.8}
    backgroundImg={Milling}
  />
</main>