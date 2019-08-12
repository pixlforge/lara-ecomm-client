<template>
  <div>
    <ul>
      <li
        v-for="product in products"
        :key="product.id"
        class="block my-8"
      >
        <AppCartOverviewProduct :product="product"/>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import AppCartOverviewProduct from '@/components/cart/AppCartOverviewProduct'

export default {
  components: {
    AppCartOverviewProduct
  },
  computed: {
    ...mapGetters({
      products: 'cart/products'
    })
  }
}
</script>
