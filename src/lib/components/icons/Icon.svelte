<!--
  The steps for adding new icons are as follows:
    - move a .svg file into /icons and change the ending to .svelte
    - import the .svelte file below
    - map the import alias to a string name in iconMap
 -->
<script lang="ts" context="module">
  import LogoFull from './LogoFull.svelte'
  import LogoMin from './LogoMin.svelte'
  import LogoMinDark from './LogoMinDark.svelte'

  import Hamburger from './Hamburger.svelte'
  import Close from './Close.svelte'

  // matches a string name (the icon name) to an imported svelte components (the icon).
  const iconMap = {
    logoFull: LogoFull,
    logoMin: LogoMin,
    logoMinDark: LogoMinDark,
    hamburger: Hamburger,
    close: Close
  }

  /** A type representing valid icon names. */
  export type IconType = keyof typeof iconMap

  /** An array of valid icon names included within IconType */
  export const IconNames = Object.keys(iconMap)
</script>

<script lang="ts">
  /** The name of the icon to display. */
  export let icon: IconType

  $: iconSelect = iconMap[icon]
</script>

<!-- 
  @component
  
  This component substitutes for many icons. Use CSS width and height to change the size.
-->

<svelte:component this={iconSelect} class={$$props.class} style={$$props.style} />
