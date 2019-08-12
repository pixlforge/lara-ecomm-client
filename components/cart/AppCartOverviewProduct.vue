<template>
  <div class="relative shadow-lg hover:shadow-xl cursor-pointer flex flex-col md:flex-row items-center px-4 md:px-8 py-8">

    <!-- Product image -->
    <div class="w-full md:w-1/12 self-start mb-6 md:mb-0">
      <img
        src="http://via.placeholder.com/60x60"
        alt="Product image"
        class="mx-auto"
      >
    </div>

    <!-- Product name -->
    <div class="w-full md:w-5/12 px-4">
      <h5 class="text-lg md:text-xl text-gray-900 font-bold text-center md:text-left">
        {{ baseProductName }} {{ productVariationName }}
      </h5>
      <p class="text-gray-700 leading-relaxed text-center md:text-left mt-4">
        {{ baseProductDescription }}
      </p>
    </div>

    <!-- Quantity -->
    <div class="w-full md:w-3/12 flex flex-col justify-center px-4">
      <h5 class="text-sm text-gray-900 font-bold text-center md:text-left">
        Quantity
      </h5>

      <AppFormSelect
        v-model.number="quantity"
        :errors="errors"
        name="quantity"
      >
        <option
          v-if="productOutOfStock"
          value="0"
        >
          0
        </option>
        <option
          v-for="n in itemsInStock"
          :key="n"
          :value="n"
          :selected="n === product.quantity"
        >
          {{ n }}
        </option>
      </AppFormSelect>
    </div>

    <!-- Total -->
    <div class="w-full md:w-3/12 text-center text-lg font-semibold text-gray-800 px-4">
      {{ productTotal }}
    </div>

    <!-- Remove -->
    <button
      class="absolute top-0 right-0 w-6 h-6 rounded-full bg-gray-200 hover:bg-red-300 text-2xl text-gray-400 hover:text-red-600 font-extrabold leading-none mr-4 mt-4"
      @click.prevent="remove"
    >
      &times;
    </button>

  </div>
</template>

<script>
import { mapActions } from 'vuex'

import AppFormSelect from '@/components/forms/AppFormSelect'

export default {
  components: {
    AppFormSelect
  },
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      quantity: this.product.quantity,
      errors: {}
    }
  },
  computed: {
    baseProductName() {
      return this.product.product.name
    },
    productVariationName() {
      return this.product.name
    },
    baseProductDescription() {
      return this.product.product.description
    },
    itemsInStock() {
      return this.product.stock_count
    },
    productTotal() {
      return this.product.total.formatted
    },
    productOutOfStock() {
      return this.product.quantity === 0
    }
  },
  watch: {
    async quantity(quantity) {
      await this.update({
        productId: this.product.id,
        quantity: quantity
      })
    }
  },
  methods: {
    ...mapActions({
      update: 'cart/update',
      destroy: 'cart/destroy'
    }),
    async remove() {
      await this.destroy(this.product.id)
    }
  }
}
</script>
