<script lang='ts'>
  import ReviewCard from "./ReviewCard.svelte"

  export let blog
  export let reviewerImage: string
  export let reviewerName: string
  export let reviewText: string
  export let company: string
  export let href: string = ''

</script>

<style>
  main {
    box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.35);
  }
</style>

<main class='relative w-[782px] h-[576px] bg-purple-400 shadow-lg mb-30 mr-28 rounded-xl'>
  
  <h2 class='m-0 px-5 py-2'>{blog.title}</h2>

  <div>

  </div>

  <ReviewCard 
    class='absolute left-2/3 top-0'
    img={reviewerImage}
    text={reviewText}
    {reviewerName}
    {company}
    {href}
  />
</main>