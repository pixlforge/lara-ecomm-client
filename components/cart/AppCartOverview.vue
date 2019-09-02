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

    <div class="w-64 text-lg text-gray-800 mx-auto my-8">
      <div class="flex justify-between">
        <h5 class="font-bold">
          Subtotal
        </h5>
        <span class="ml-2">
          {{ subtotal.formatted }}
        </span>
      </div>
      <div
        v-if="shipping && shipping.price"
        class="flex justify-between"
      >
        <h5 class="font-bold">
          Shipping
        </h5>
        <span class="ml-2">
          {{ shipping.price.formatted }}
        </span>
      </div>
      <div class="flex justify-between">
        <h5 class="font-bold">
          Total
        </h5>
        <span class="ml-2">
          {{ total.formatted }}
        </span>
      </div>
    </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import AppCartOverviewProduct from '@/components/cart/AppCartOverviewProduct'

export default {
  components: {
    AppCartOverviewProduct
  },
  props: {
    shipping: {
      type: Object,
      required: false,
      default: () => {
        return {}
      }
    }
  },
  computed: {
    ...mapGetters({
      products: 'cart/products',
      subtotal: 'cart/subtotal',
      total: 'cart/total'
    })
  }
}
</script>
