<script lang="ts">
  import { InfoPageHeader } from '$components'
  import ReviewCard from '$components/ReviewCard.svelte'
  import ReviewWithBlog from '$components/ReviewWithBlog.svelte'
  import type { LayoutData } from '../$types'

  export let data: LayoutData
  
  // there can only be 3 at most
  let reviews = data.reviews.filter(review => review.showOnWorkPage)

  // gets the blogs for each review on the work page
  for (let i = 0; i < reviews.length; i++) {
    Object.assign(reviews[i], { blog: data.blogs.find(blog => blog.id === reviews[i].blogId ) });
  }

</script>

<main>
  <!-- above the fold -->
  <div class='h-screen flex flex-col'>
    <InfoPageHeader class="-mt-4 bg-black text-white" title="THE WORK" titleFont={250} />
    <div class='bg-black text-white flex-grow'>

      
    </div>
    
  </div>
  <div class='flex'>
    <div class='w-1/2'>

    </div>
    <div>

      {#each reviews as review, i}

      <ReviewWithBlog
        blog={review.blog}
        reviewerImage={review.reviewerImage}
        reviewText={review.shortText}
        reviewerName={review.reviewerName}
        company={review.company}
      />

      {/each}
    </div>
  </div>
  
  <br />
  <br />
  <br />
  <br />
</main>
