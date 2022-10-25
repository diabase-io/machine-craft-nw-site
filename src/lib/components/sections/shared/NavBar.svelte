<script>
  import { Locon } from '$lib/components'
</script>

<div class="drawer">
  <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content flex flex-col">
    <!-- Navbar -->
    <div class="w-full navbar bg-base-200 fixed">
      <div class="navbar-start">
        <div class="hidden lg:block">
          <a class="btn btn-ghost normal-case text-xl p-0" href={'/'}>
            <Locon locon="mcnwLightMin" class=" w-14" />
          </a>
        </div>
        <div class="flex-none lg:hidden">
          <label for="my-drawer-3" class="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block w-6 h-6 stroke-current"
              ><path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              /></svg
            >
          </label>
        </div>
      </div>

      <div class="navbar-center flex">
        <div class="flex-none hidden lg:block">
          <ul class="menu menu-horizontal">
            <!-- Navbar menu content here -->
            <li><a href={'/work'}>The Work</a></li>
            <li><a href={'/shop'}>The Shop</a></li>
            <li><a href={'/machines'}>The Machines</a></li>
            <li><a href={'/blog'}>The Blog</a></li>
          </ul>
        </div>
        <div class="block lg:hidden">
          <a class="btn btn-ghost normal-case text-xl" href={''}>
            <Locon locon="mcnwLightMin" />
          </a>
        </div>
      </div>

      <div class="navbar-end">
        <a class="btn btn-sm btn-secondary text-xs lg:text-sm mr-4" href={''}>Virtual Tour!</a>
        <a class="btn btn-sm btn-primary text-xs lg:text-sm" href={''}>Get a Quote</a>
      </div>
    </div>
    <!-- Page content here -->
    <slot />
  </div>
  <div class="drawer-side">
    <label for="my-drawer-3" class="drawer-overlay" />
    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
      <!-- Sidebar content here -->
      <li><a href={''}>Sidebar Item 1</a></li>
      <li><a href={''}>Sidebar Item 2</a></li>
    </ul>
  </div>
</div>
