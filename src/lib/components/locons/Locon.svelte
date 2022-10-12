<script lang="ts">
  /**
   * Locon is a portmanteu of Logo + Icon
   * Locon is a component capabale of wrenching forth both 'logos' & 'icons'
   */
  import { McNwLightFull, McNwLightMin } from './'

  type Locon = 'mcnwLightFull' | 'mcnwLightMin'

  export let locon: Locon

  $: loconComp = {
    mcnwLightFull: McNwLightFull,
    mcnwLightMin: McNwLightMin
  }[locon]
</script>

<svelte:component this={loconComp} class={$$props.class} style={$$props.style} />
