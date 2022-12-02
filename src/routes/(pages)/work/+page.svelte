<script lang="ts">
  import { InfoPageHeader } from '$components'
  import ReviewCard from '$components/ReviewCard.svelte'
  import type { LayoutData } from '../$types'

  export let data: LayoutData
  
  let reviewsToShow = [];

  data.reviews.forEach(review => {
    if (review.properties['Show On'].select.name === 'Work Page') {
      reviewsToShow.push(review);
    }
  });

</script>

<main>
  <!-- above the fold -->
  <div class='h-screen flex flex-col'>
    <InfoPageHeader class="-mt-4 bg-black text-white" title="THE WORK" titleFont={250} />
    <div class='bg-black text-white flex-grow'>
      <ReviewCard
        title={reviewsToShow[0].properties.Name.title[0].plain_text}
        img={reviewsToShow[0].properties['Reviewer Picture'].files[0].file.url}
        text={reviewsToShow[0].properties['Short Text'].rich_text[0].plain_text}
        reviewerName={reviewsToShow[0].properties['Person'].rich_text[0].plain_text}
        company={reviewsToShow[0].properties['Company'].rich_text[0].plain_text}
      />
    </div>
    
  </div>
  <div class="mx-auto w-[1360px]">
    
  </div>
  
  <br />
  <br />
  <br />
  <br />
</main>
