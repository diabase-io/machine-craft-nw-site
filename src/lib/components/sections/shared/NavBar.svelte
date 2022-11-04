<!-- 
  @component
  
  A header that is fixed to the top of the screen. It has a default height that can be changed
  by adding a class to it. It's recommended to apply internal margins by using horizontal
  padding in a class as well.
 -->

<script lang="ts">
  import { goto } from '$app/navigation'
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
      @apply mx-auto
    }
  }
</style>

<main class="{$$props.class} z-50 h-[var(--hd)] w-full bg-black px-5 text-white md:px-16 dsk:fixed text-xl">
  <div class="flex justify-between">

    <!-- logo -->
    <a href='/' class="cursor-pointer select-none h-[var(--hd)]">
      <Icon icon='logoMin' class='w-20'></Icon>
    </a>

    <!-- mobile: menu toggle button -->
    <div
      on:click={toggleMenu}
      class="h-[var(--hd)] btn btn-ghost lg:hidden"
    >
      <Icon icon={menuToggleIcon} class='w-9' />
    </div>

    <!-- desktop: horizontal menu in header -->
    <!-- mobile: this is the menu drawer that's toggled -->
    <div class="{mobileMenuDisplaying ? 'block absolute top-[var(--hd)] left-0 w-full bg-black' : 'hidden '}
      lg:flex lg:flex-col lg:justify-center lg:static"
    >
      <ul class="menu menu-vertical w-[200px] mx-auto lg:menu-horizontal lg:w-min">
        <li><a draggable="false" href={'/work'}>The Work</a>
        <li><a draggable="false" href={'/shop'}>The Shop</a>
        <li><a draggable="false" href={'/machines'}>The Machines</a>
        <li><a draggable="false" href={'/blog'}>The Blog</a></li>

        <div class='h-[var(--hd)] flex flex-col justify-center'>
          <button
            on:click={toggleMenu}
            class=" btn btn-secondary w-40 lg:w-min"
          >
            Virtual Tour
          </button>
        </div>
        
        <div class='h-[var(--hd)] flex flex-col justify-center'>
          <button
            on:click={toggleMenu}
            class=" btn btn-primary"
          >
            Request a Quote
          </button>
        </div>
      </ul>
    </div>
</main>
