<template>
  <!-- component -->
  <div class="flex">
    <!-- add minimize class to body tag -->
    <!-- want to open give it expand -->
    <aside class="group collapsed sidebar">
      <div class="h-full overflow-y-auto">
        <div class="-mx-6 h-16 px-6 py-4">
          <a href="#" title="home">
            <img
              src="https://tailus.io/sources/blocks/stats-cards/preview/images/logo.svg"
              class="w-32"
              alt="tailus logo"
            />
          </a>
        </div>
        <div class="mt-8 text-center">
          <img
            src="https://tailus.io/sources/blocks/stats-cards/preview/images/second_user.webp"
            alt=""
            class="w-10 h-10 m-auto rounded-full object-cover"
          />
          <h5
            class="hidden mt-4 text-xl font-semibold text-gray-600 lg:block group-[.minimize]:hidden group-[.minimize:hover]:block"
          >
            Cynthia J. Watts
          </h5>
          <span
            class="hidden text-gray-400 lg:block group-[.minimize]:hidden group-[.minimize:hover]:block"
            >Admin</span
          >
        </div>
        <ul class="space-y-2 tracking-wide mt-8">
          <li class="rounded-xl p-1">
            <a
              href="#"
              aria-label="dashboard"
              class="sidebar-menu-item group-[.minimize]:justify-center group-[.minimize:hover]:justify-start"
            >
              <icon-ic-baseline-3p />
              <span
                class="-mr-1 font-medium group-[.minimize]:hidden group-[.minimize:hover]:block"
                >Dashboard</span
              >
            </a>
            <ul class="my-1 ml-4 space-y-2">
              <li class="my-1">
                <a
                  href="#"
                  aria-label="child-item"
                  class="sidebar-menu-item active group-[.minimize]:justify-center group-[.minimize:hover]:justify-start"
                >
                  <icon-ic-baseline-3p />
                  <span
                    class="-mr-1 font-medium group-[.minimize]:hidden group-[.minimize:hover]:block"
                    >Child Item</span
                  >
                </a>
              </li>
              <li class="my-1">
                <a
                  href="#"
                  aria-label="child-item"
                  class="sidebar-menu-item group-[.minimize]:justify-center group-[.minimize:hover]:justify-start"
                >
                  <icon-ic-baseline-3p />
                  <span
                    class="-mr-1 font-medium group-[.minimize]:hidden group-[.minimize:hover]:block"
                    >Child Item</span
                  >
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a
              href="#"
              class="sidebar-menu-item group-[.minimize]:justify-center group-[.minimize:hover]:justify-start"
            >
              <icon-ic-baseline-3p />
              <span class="group-[.minimize]:hidden group-[.minimize:hover]:block"
                >Categories</span
              >
            </a>
            <ul class="my-1 ml-4 space-y-2">
              <li class="my-1">
                <a
                  href="#"
                  aria-label="child-item"
                  class="sidebar-menu-item group-[.minimize]:justify-center group-[.minimize:hover]:justify-start"
                >
                  <icon-ic-baseline-3p />
                  <span
                    class="-mr-1 font-medium group-[.minimize]:hidden group-[.minimize:hover]:block"
                    >Child Item</span
                  >
                </a>
              </li>
              <li class="my-1">
                <a
                  href="#"
                  aria-label="child-item"
                  class="sidebar-menu-item group-[.minimize]:justify-center group-[.minimize:hover]:justify-start"
                >
                  <icon-ic-baseline-3p />
                  <span
                    class="-mr-1 font-medium group-[.minimize]:hidden group-[.minimize:hover]:block"
                    >Child Item</span
                  >
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div class="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
        <button
          class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
        >
          <icon-ic-round-search />
          <span
            class="group-hover:text-gray-700 group-[.minimize]:hidden group-[.minimize:hover]:block"
            >Logout</span
          >
        </button>
      </div>
    </aside>
    <div class="ml-auto mb-6 w-full">
      <div class="sticky z-10 top-0 h-16 border-b bg-white lg:py-2.5">
        <div class="px-6 flex items-center justify-between space-x-4 2xl:container">
          <h5 hidden class="text-2xl text-gray-600 font-medium lg:block">Dashboard</h5>
          <button class="w-12 h-16 -mr-2 border-r lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 my-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <div class="flex space-x-4">
            <!--search bar -->
            <div hidden class="md:block">
              <div
                class="relative flex items-center text-gray-400 focus-within:text-cyan-400"
              >
                <span
                  class="absolute left-4 h-6 flex items-center pr-3 border-r border-gray-300"
                >
                  <icon-ic-round-search />
                </span>
                <input
                  type="search"
                  name="leadingIcon"
                  id="leadingIcon"
                  placeholder="Search here"
                  class="w-full pl-14 pr-4 py-2.5 rounded-xl text-sm text-gray-600 outline-none border border-gray-300 focus:border-cyan-300 transition"
                />
              </div>
            </div>
            <!--/search bar -->
            <button
              aria-label="search"
              class="w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200 md:hidden"
            >
              <icon-ic-round-search />
            </button>
            <button
              aria-label="chat"
              class="w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200"
            >
              <icon-ic-round-search />
            </button>
            <button
              aria-label="notification"
              class="w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200"
            >
              <icon-ic-round-search />
            </button>
          </div>
        </div>
      </div>

      <div class="px-6 pt-6 2xl:container">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.sidebar {
  $parent: &;
  @apply z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12;
  &.minimize {
    @apply lg:w-[12%] xl:w-[10%] 2xl:w-[5%];
    &:hover {
      @apply lg:w-[25%] xl:w-[20%] 2xl:w-[15%];
    }
  }

  &.collapsed {
    @apply ml-[-100%] sticky lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]
  }

  &.expand {
    @apply ml-0 fixed
  }

  .sidebar-menu-item {
    @apply relative px-4 py-3 flex items-center space-x-4 rounded-xl text-gray-700;

    &.active {
      @apply text-white bg-primary;

      &:hover {
        @apply text-primary bg-white border border-primary;
      }
    }
    &:hover {
      @apply text-white bg-primary;
    }
  }

  ul li {
    ul {
      @apply hidden;
    }

    &:has(ul li a.sidebar-menu-item.active) {
      ul {
        @apply block;
      }

      > a.sidebar-menu-item {
        @apply text-white bg-primary;

        &:hover {
          @apply text-primary bg-white border border-primary;
        }
      }
    }

    &:has(ul li a.sidebar-menu-item) {
      &:hover {
        ul {
          @apply block;
        }

        > a.sidebar-menu-item {
          @apply text-white bg-primary;

          &:hover {
            @apply text-primary bg-white border border-primary;
          }
        }
      }
    }
  }
}
</style>
