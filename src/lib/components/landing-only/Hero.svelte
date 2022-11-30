<script>
  import { Icon } from '$components'
  import Background from '$lib/assets/landing.jpg'
</script>

<main class="hero h-[92vh]">
  <img class='w-full h-full overflow-hidden object-cover object-top' alt='' src={Background}>

  <div class="hero-content flex-col lg:flex-row">
    <Icon icon="logoFull" class="mr-12 w-64" />
    <div>
      <h1 class="text-5xl font-bold">Precision Machining</h1>
      <p class="max-w-lg py-6">
        Machine Craft Northwest has specialized in precision machining for 25 years. We offer full
        service manufacturing from design, programming, machining, and measuring
      </p>
      <button class="btn btn-primary">Request a Quote</button>
    </div>
  </div>
</main>
