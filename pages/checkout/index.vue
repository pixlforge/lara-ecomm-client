<template>
  <div class="-mt-8">

    <!-- Address -->
    <AppShippingAddress
      v-model="form.address_id"
      :addresses="addresses"
    />

    <!-- Payment methods -->
    <div class="border-l-8 border-gray-400 px-4 py-6 my-8">
      <h1 class="text-2xl font-semibold text-gray-900">
        Payment
      </h1>
    </div>

    <!-- Shipping -->
    <div class="border-l-8 border-gray-400 px-4 py-6 my-8">
      <h1 class="text-2xl font-semibold text-gray-900">
        Shipping
      </h1>

      <AppFormSelect
        v-model.number="form.shippingMethod_id"
        :errors="errors"
        name="shippingMethod"
        class="mt-6"
      >
        <option
          v-for="shippingMethod in shippingMethods"
          :key="shippingMethod.id"
          :value="shippingMethod.id"
        >
          {{ shippingMethod.name }} ({{ shippingMethod.price.formatted }})
        </option>
      </AppFormSelect>
    </div>

    <!-- Cart overview -->
    <section
      v-if="products.length"
      class="border-l-8 border-gray-400 px-4 py-6 my-8"
    >
      <h1 class="text-2xl font-semibold text-gray-900">
        Cart summary
      </h1>

      <AppCartOverview
        shipping="CHF 0.00"
        class="mt-6"
      />
    </section>

    <!-- Place order button -->
    <AppButtonPrimary
      :disabled="isEmpty"
      label="Place order"
      size="large"
    />

  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import AppFormSelect from '@/components/forms/AppFormSelect'
import AppCartOverview from '@/components/cart/AppCartOverview'
import AppButtonPrimary from '@/components/buttons/AppButtonPrimary'
import AppShippingAddress from '@/components/checkout/addresses/AppShippingAddress'

export default {
  components: {
    AppFormSelect,
    AppCartOverview,
    AppButtonPrimary,
    AppShippingAddress
  },
  data() {
    return {
      form: {
        address_id: '',
        shippingMethod_id: ''
      },
      shippingMethods: [],
      addresses: [],
      errors: {}
    }
  },
  computed: {
    ...mapGetters({
      products: 'cart/products',
      isEmpty: 'cart/isEmpty'
    })
  },
  watch: {
    'form.address_id'(address) {
      this.getShippingMethodsForAddress(address)
    }
  },
  async asyncData({ app }) {
    const addresses = await app.$axios.$get('/addresses')

    return {
      addresses: addresses.data
    }
  },
  methods: {
    async getShippingMethodsForAddress(address) {
      try {
        const res = await this.$axios.$get(`/addresses/${address}/shipping`)
        this.shippingMethods = res.data
      } catch (e) {
        this.errors = e.response.data.errors
      }
    }
  }
}
</script>
