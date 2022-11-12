<script>
  import { page } from '$app/stores'
  import { InfoPageHeader } from '$components'

  // the current directory name within (info)
  $: title = $page.routeId?.split('/')[1] || ''
</script>

<InfoPageHeader {title} />
<slot />
