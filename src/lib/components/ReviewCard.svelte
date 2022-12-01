<script lang="ts">
  import { Icon } from '$components'

  export let title: string
  export let img: string
  export let text: string
  export let reviewerName: string
  export let company: string
  export let href: string = ''
</script>

<style>
  /* adds drop shadow and hover animation */
  main {
    transition: filter 0.3s ease;
    filter: drop-shadow(2px 2px 15px rgba(0, 0, 0, 0.25));
  }
  main:hover {
    transition: filter 0.3s ease;
    filter: drop-shadow(2px 2px 15px rgba(0, 0, 80, 0.4));
  }
</style>

<main class="relative h-[540px] w-[368px] rounded-lg bg-gray-50">
  <img alt="" src={img} class="h-[200px] w-full rounded-t-lg object-cover object-top" />
  <div class="h-4 w-full bg-secondary-dark">
    <Icon icon="quoteCircle" class="translate-x-5 -translate-y-6" />
  </div>
  <div class="px-6 pt-1 text-[19px] leading-6">
    <p>{text}</p>
    <div class="absolute bottom-0">
      <div class="font-medium">{reviewerName}</div>
      <div class="text-[17px] italic">{company}</div>
      <button class="btn btn-primary mt-2 mb-4 text-xl normal-case text-white"
        >Read Full Review</button
      >
    </div>
  </div>
</main>
