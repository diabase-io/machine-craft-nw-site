<script lang="ts">
  import { InfoPageHeader } from '$components'
  import ReviewCard from '$components/ReviewCard.svelte'
  import { isCurrentRoute, PATHS } from '$lib/paths'
  import type { LayoutData } from '../$types'
  import { page } from '$app/stores'

  export let data: LayoutData

  $: if (isCurrentRoute(page, PATHS.work)) {
    console.log('TRUE')
  } else {
    console.log('FALSE')
  }
</script>

<InfoPageHeader class="-mt-4" title="THE WORK" titleFont={250} />

<div class="mx-auto w-[1360px]">
  {#each data.reviews as review}
    <ReviewCard
      title={review.properties.Name.title[0].plain_text}
      img={review.properties['Reviewer Picture'].files[0].file.url}
      text={review.properties['Short Text'].rich_text[0].plain_text}
      reviewerName={review.properties['Reviewer Name'].rich_text[0].plain_text}
      company={review.properties['Reviewer Company'].rich_text[0].plain_text}
    />
  {/each}
</div>

<br />
<br />
<br />
<br />
