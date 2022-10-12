<script>
  import { page } from '$app/stores'
  import { InfoPageHeader } from '$components'

  $: title = $page.routeId?.split('/')[1] || ''
  // $: title = `${titleLower.slice(0, 1).toUpperCase()}${titleLower.slice(1)}`

</script>

<InfoPageHeader {title} />
<slot />
