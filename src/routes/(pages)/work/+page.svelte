<script lang="ts">
  import { InfoPageHeader } from '$components'
  import ReviewCard from '$components/ReviewCard.svelte'
  import type { LayoutData } from '../$types'

  export let data: LayoutData
  
  // there can only be 3 at most
  const reviews = data.reviews.filter(review => review.showOnWorkPage)

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

      <ReviewCard
        title={review.title}
        img={review.reviewerImage}
        text={review.shortText}
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
