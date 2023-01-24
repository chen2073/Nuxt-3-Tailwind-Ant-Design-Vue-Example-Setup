<template>
  <a-layout-sider width="280" style="background: #2C55B5">
    <div>
      <h3>
        <NuxtLink to="/">
          <span>Home</span>
        </NuxtLink>
      </h3>
      <a-menu mode="inline">
        <a-menu-item key="1">
          <NuxtLink to="/about">
            <span>About</span>
          </NuxtLink>
        </a-menu-item>
        <a-menu-item key="2">
          <NuxtLink to="/counter">
            <span>Counter</span>
          </NuxtLink>
        </a-menu-item>
        <a-menu-item key="3">
          <NuxtLink to="/hello">
            <span>Hello</span>
          </NuxtLink>
        </a-menu-item>
      </a-menu>
    </div>
  </a-layout-sider>
</template>
<!-- <template>
  <aside class="w-64" aria-label="Sidebar">
    <div class="overflow-y-auto bg-[#2C55B5]">
      <ul class="space-y-2">
        <li>
          <NuxtLink to="/">
            <a href="#"
              class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              <span class="ml-3">Home</span>
            </a>
          </NuxtLink>
        </li>
        <li>
          <a href="#"
            class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <span class="flex-1 ml-3 whitespace-nowrap">About</span>
          </a>
        </li>
        <li>
          <a href="#"
            class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <span class="flex-1 ml-3 whitespace-nowrap">Counter</span>
          </a>
        </li>
        <li>
          <a href="#"
            class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <span class="flex-1 ml-3 whitespace-nowrap">Hello</span>
          </a>
        </li>
      </ul>
    </div>
  </aside>
</template> -->