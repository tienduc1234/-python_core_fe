<template>
  <nav
    class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900"
  >
    <div class="container flex flex-wrap items-center justify-between mx-auto">
      <router-link to="/">
        <h1
          class="block py-2 pl-3 pr-4 text-2xl  "
          aria-current="page"
          >Map
        </h1>
      </router-link>

      <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul
          class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
        >
          <li>
            <router-link to="/">
              <a
                class="block py-2 pl-3 pr-4 text-white bg-green-500 rounded "
                aria-current="page"
                >Trang chủ
              </a>
            </router-link>
          </li>
          <li>
            <router-link to="/list-ward">
              <a
                 class="block py-2 pl-3 pr-4 text-white bg-green-500 rounded "
                >Phường xã</a
              >
            </router-link>
          </li>
          <li>
            <router-link to="/create-ward">
              <a
                class="block py-2 pl-3 pr-4 text-white bg-green-500 rounded "
                >Tạo phường xã</a
              >
            </router-link>
          </li>
          <li>
            <router-link to="/create-place">
              <a
                 class="block py-2 pl-3 pr-4 text-white bg-green-500 rounded "
                >Tạo địa điểm</a
              >
            </router-link>
          </li>
          <!-- <li>
            <a
              class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >Contact</a
            >
          </li> -->
        </ul>
      </div>
    </div>
  </nav>
</template>

<script></script>
