<script>
  import mcnwLogo from '$lib/assets/mcnw-logo.png'
</script>

<div class="drawer">
  <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content flex flex-col">
    <!-- Navbar -->
    <div class="w-full navbar bg-base-100">
      <div class="navbar-start">
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
            <li><a href={''}>Navbar Item 1</a></li>
            <li><a href={''}>Navbar Item 2</a></li>
          </ul>
        </div>
        <div class="block lg:hidden">
          <a class="btn btn-ghost normal-case text-xl" href={''}
          ><img src={mcnwLogo} class=" w-12" alt="" /></a
        >
        </div>
        
      </div>

      <div class="navbar-end">
        <a class="btn btn-sm btn-accent text-xs lg:text-base mr-4" href={''}>Virtual Tour!</a>
        <a class="btn btn-sm btn-primary text-xs lg:text-base" href={''}>Request a Quote</a>
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
