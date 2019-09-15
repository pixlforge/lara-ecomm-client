<template>
  <div class="-mt-8">

    <!-- Address -->
    <AppShippingAddress
      v-model="form.address_id"
      :addresses="addresses"
    />

    <!-- Payment methods -->
    <AppPaymentMethods
      v-model="form.payment_method_id"
      :payment-methods="paymentMethods"
    />

    <!-- Shipping -->
    <div class="border-l-8 border-gray-400 px-4 py-6 my-8">
      <h1 class="text-2xl font-semibold text-gray-900">
        Shipping
      </h1>

      <AppFormSelect
        v-model.number="shippingMethodId"
        :errors="errors"
        name="shipping_method_id"
        class="mt-6"
      >
        <option
          v-for="shippingMethod in shippingMethods"
          :key="shippingMethod.id"
          :value="shippingMethod.id"
          :selected="shippingMethod.id == shippingMethodId"
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
        :shipping="shippingMethod"
        class="mt-6"
      />
    </section>

    <!-- Place order button -->
    <AppButtonPrimary
      :disabled="isEmpty || submitting"
      label="Place order"
      size="large"
      @click.native="order"
    />

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import AppFormSelect from '@/components/forms/AppFormSelect'
import AppCartOverview from '@/components/cart/AppCartOverview'
import AppButtonPrimary from '@/components/buttons/AppButtonPrimary'
import AppShippingAddress from '@/components/checkout/addresses/AppShippingAddress'
import AppPaymentMethods from '@/components/checkout/paymentMethods/AppPaymentMethods'

export default {
  components: {
    AppFormSelect,
    AppCartOverview,
    AppButtonPrimary,
    AppShippingAddress,
    AppPaymentMethods
  },
  data() {
    return {
      form: {
        address_id: '',
        payment_method_id: ''
      },
      shippingMethods: [],
      paymentMethods: [],
      addresses: [],
      errors: {},
      submitting: false
    }
  },
  computed: {
    ...mapGetters({
      products: 'cart/products',
      isEmpty: 'cart/isEmpty',
      shippingMethod: 'cart/shippingMethod'
    }),
    shippingMethodId: {
      get() {
        return this.shippingMethod ? this.shippingMethod.id : ''
      },
      set(value) {
        this.setShippingMethod(this.shippingMethods.find(method => method.id === value))
      }
    }
  },
  watch: {
    'form.address_id'(address) {
      this.getShippingMethodsForAddress(address).then(() => {
        this.setShippingMethod(this.shippingMethods[0])
      })
    },
    shippingMethodId() {
      this.getCart()
    }
  },
  async asyncData({ app }) {
    const addresses = await app.$axios.$get('/addresses')
    const paymentMethods = await app.$axios.$get('/payment-methods')

    return {
      addresses: addresses.data,
      paymentMethods: paymentMethods.data
    }
  },
  methods: {
    ...mapActions({
      flash: 'alert/flash',
      getCart: 'cart/getCart',
      setShippingMethod: 'cart/setShippingMethod'
    }),
    async getShippingMethodsForAddress(address) {
      try {
        const res = await this.$axios.$get(`/addresses/${address}/shipping`)
        this.shippingMethods = res.data
        return res
      } catch (e) {
        this.errors = e.response.data.errors
      }
    },

    /**
     * Submit the order.
     */
    async order() {
      this.submitting = true

      try {
        await this.$axios.$post('/orders', {
          ...this.form,
          shipping_method_id: this.shippingMethodId
        })
        await this.getCart()
        this.$router.push({ name: 'orders' })
        this.flash('Purchase successful!')
      } catch (e) {
        this.flash(e.response.data.message)
        await this.getCart()
      }

      this.submitting = false
    }
  }
}
</script>
