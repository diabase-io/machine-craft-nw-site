<!-- 
  @component
  
  A header that is fixed to the top of the screen. It has a default height that can be changed
  by adding a class to it. It's recommended to apply internal margins by using horizontal
  padding in a class as well.
 -->
<script lang="ts">
  import { Icon } from '$components'
  import type { IconType } from '$components/icons/Icon.svelte'

  let mobileMenuDisplaying = false
  let menuToggleIcon: IconType = 'hamburger'

  const toggleMenu = () => {
    mobileMenuDisplaying = !mobileMenuDisplaying
    menuToggleIcon = mobileMenuDisplaying ? 'close' : 'hamburger'
  }
</script>

<style>
  :root {
    /* default header height */
    --hd: 84px;
  }
  /* only applies to screen sizes below lg breakpoint */
  @media (max-width: 1024px) {
    ul > * {
      @apply mx-auto;
    }
  }
</style>

<main class="{$$props.class}  z-50 h-[var(--hd)] w-full bg-black px-5 text-xl text-white md:px-16 dsk:fixed">
  <div class="flex justify-between">
    <!-- logo -->
    <a href="/" class="h-[var(--hd)] cursor-pointer select-none">
      <Icon icon="logoMin" class="w-20" />
    </a>

    <!-- mobile: menu toggle button -->
    <div on:click={toggleMenu} class="btn btn-ghost h-[var(--hd)] lg:hidden">
      <Icon icon={menuToggleIcon} class="w-9" />
    </div>

    <!-- desktop: horizontal menu in header -->
    <!-- mobile: this is the menu drawer that's toggled -->

    <div
      class="{mobileMenuDisplaying ? 'absolute top-[var(--hd)] left-0 block w-full bg-black' : 'hidden '}
      z-50 flex-col justify-center pb-5 lg:static lg:flex lg:p-0"
    >
      <ul class="menu menu-vertical mx-auto w-52 lg:menu-horizontal lg:w-max ">
        <li><a draggable="false" href={'/work'}>The Work</a></li>
        <li><a draggable="false" href={'/shop'}>The Shop</a></li>
        <li><a draggable="false" href={'/machines'}>The Machines</a></li>
        <li><a draggable="false" href={'/blog'}>The Blog</a></li>

        <div class="flex flex-col justify-center py-2 lg:mr-4 lg:h-[var(--hd)] lg:py-0">
          <button on:click={toggleMenu} class=" btn btn-secondary w-40 lg:w-max"> Virtual Tour </button>
        </div>

        <div class="flex flex-col justify-center py-2 lg:h-[var(--hd)] lg:py-0">
          <button on:click={toggleMenu} class=" btn btn-primary"> Request a Quote </button>
        </div>
      </ul>
    </div>
  </div>
</main>
