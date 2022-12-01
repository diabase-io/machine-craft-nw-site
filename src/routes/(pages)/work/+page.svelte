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
  <ReviewCard />
</div>
