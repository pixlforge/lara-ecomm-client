<template>
  <div class="bg-pink-500 text-white">
    <div class="container flex flex-col md:flex-row justify-between items-center mx-auto px-4 py-8">
      <div class="text-xl font-black uppercase tracking-wide">
        <nuxt-link :to="{ name: 'index' }">
          Lara Ecomm
        </nuxt-link>
      </div>
      <ul class="flex font-bold -mx-4 mt-8 md:mt-0">
        <li class="mx-4">
          Link
        </li>
        <li class="mx-4">
          Link
        </li>
        <li class="mx-4">
          Link
        </li>
      </ul>
    </div>
  </div>
</template>
