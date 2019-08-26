<template>
  <main>

    <!-- Page title -->
    <h1 class="text-3xl font-extrabold text-gray-800 mb-16">
      My Cart
    </h1>

    <AppCartOverview/>

    <AppButtonLinkPrimary
      v-if="!isEmpty"
      :url="{ name: 'checkout' }"
      label="Proceed to Checkout"
      size="large"
      class="block"
    />

  </main>
</template>

<script>
import { mapGetters } from 'vuex'

import AppCartOverview from '@/components/cart/AppCartOverview'
import AppButtonLinkPrimary from '@/components/buttons/AppButtonLinkPrimary'

export default {
  components: {
    AppCartOverview,
    AppButtonLinkPrimary
  },
  computed: {
    ...mapGetters({
      isEmpty: 'cart/isEmpty',
      hasChanged: 'cart/hasChanged'
    })
  }
}
</script>
