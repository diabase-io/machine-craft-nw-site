<script>
  import { page } from '$app/stores'
  import { InfoPageHeader } from '$components'

  $: title = $page.routeId?.split('/')[1] || ''
</script>

<InfoPageHeader {title} />
<slot />
