<script lang="ts">
  import ContactImg from '$assets/contact-us.jpg'

  export let showAddress = false

  let contactEmail: string
  let contactPhone: string
  let contactSubject: string
  let contactMessage: string

  let submitted = false
  let contactErr = false

  const onSubmit = async () => {}
</script>

<style>
  .bg-image {
    background-image: url('../assets/contact-us.jpg');
    background-position: 0 -80px;
  }
</style>

<main class="{$$props.class} relative text-white">
  <!-- background image -->
  <div class="absolute top-0 -z-10 h-full w-full bg-black" />
  <img
    class="absolute top-0 -z-10 h-full w-full object-cover object-[0_-50px] opacity-70"
    alt=""
    src={ContactImg}
  />

  <form class="px-[300px] pt-12 pb-32" name="ContactUsForm" on:submit|preventDefault={onSubmit}>
    <h1 class="text-white">LETS GET IN TOUCH</h1>

    {#if showAddress}
      <div class="mb-12 text-[22px] font-medium">
        <p>
          1780 W Airway Road<br />
          Lebanon, OR 97355
        </p>
        <p>
          Phone: (541) 451-4632<br />
          Email: info@machinecraftnw.com
        </p>
      </div>
    {/if}

    <div class="lg:max-w-[650px]">
      <!-- email and phone are side by side -->
      <div class="sm:flex sm:justify-between sm:space-x-10">
        <!-- email input -->
        <label class="sm:basis-[400px]" for="email">
          Contact Email
          <br />
          <input name="email" bind:value={contactEmail} type="email" required />
        </label>
        <br /><br />
        <!-- phone input -->
        <label class="flex-grow lg:basis-[200px]" for="email">
          Contact Phone
          <br />
          <input name="phone" bind:value={contactPhone} type="tel" maxlength="15" required />
        </label>
      </div>
      <br />
      <label for="subject">
        Name of your Company
        <br />
        <input name="subject" bind:value={contactSubject} minLength="1" required />
      </label>
      <br /><br />
      <label for="data">
        How can we Help?
        <br />
        <textarea name="data" bind:value={contactMessage} minlength="1" maxlength="3000" required />
      </label>
    </div>
    <br /><br />
    <!-- submit button and success/error message -->
    <div class="max-w-[650px] md:flex md:justify-between md:space-x-6">
      <button class="btn btn-secondary text-lg normal-case">Submit</button>
      {#if submitted}
        {#if contactErr}
          <div class="mt-6 max-w-[500px] text-lg text-red-700 md:mt-0">
            Something went wrong on our end. Please shoot us an email at contact@diabase.io instead.
          </div>
        {:else}
          <div class="mt-6 text-lg text-green-600 md:mt-0">Submitted successfully!</div>
        {/if}
      {/if}
    </div>
  </form>
</main>
