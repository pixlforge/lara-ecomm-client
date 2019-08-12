<template>
  <main>

    <!-- Page title -->
    <h1 class="text-3xl font-extrabold text-gray-800 mb-16">
      My Cart
    </h1>

    <AppCartOverview/>

    <AppButtonLinkPrimary
      :to="{ name: 'index' }"
      label="Proceed to Checkout"
      size="large"
      class="block"
    />

  </main>
</template>

<script>
import AppCartOverview from '@/components/cart/AppCartOverview'
import AppButtonLinkPrimary from '@/components/buttons/AppButtonLinkPrimary'

export default {
  components: {
    AppCartOverview,
    AppButtonLinkPrimary
  }
}
</script>
