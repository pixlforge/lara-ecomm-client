<template>
  <div class="text-gray-600">
    <TheAlert/>
    <AppNavbar/>
    <AppCategoriesMenu/>
    <nuxt class="container px-8 py-32 mx-auto"/>
  </div>
</template>

<script>
import TheAlert from '@/components/globals/TheAlert'
import AppNavbar from '@/components/navbar/AppNavbar'
import AppCategoriesMenu from '@/components/categories/AppCategoriesMenu'

export default {
  components: {
    TheAlert,
    AppNavbar,
    AppCategoriesMenu
  }
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
