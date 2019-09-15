<template>
  <div class="border-l-8 border-gray-400 px-4 py-6 my-8">
    <h1 class="text-2xl font-semibold text-gray-900">
      Payment Method
    </h1>

    <!-- Select a payment method -->
    <template v-if="selecting">
      <AppPaymentMethodSelector
        :payment-methods="paymentMethods"
        :selected-payment-method="selectedPaymentMethod"
        @payment-method:selected="switchPaymentMethod"
      />
    </template>

    <!-- Create a payment method -->
    <template v-else-if="creating">
      Create a payment method
    </template>

    <!-- Current shipping address -->
    <template v-else>
      <template v-if="selectedPaymentMethod">
        <ul class="text-gray-900 mt-6">
          <li>
            {{ selectedPaymentMethod.card_type }}
          </li>
          <li>
            **** **** **** {{ selectedPaymentMethod.last_four }}
          </li>
        </ul>
      </template>

      <div class="mt-6">
        <AppButtonPrimary
          label="Change payment method"
          @click.native="selecting = true"
        />
        <AppButtonPrimary
          label="Add a payment method"
          @click.native="creating = true"
        />
      </div>
    </template>

  </div>
</template>

<script>
import AppButtonPrimary from '@/components/buttons/AppButtonPrimary'
import AppPaymentMethodSelector from '@/components/checkout/paymentMethods/AppPaymentMethodSelector'

export default {
  components: {
    AppButtonPrimary,
    AppPaymentMethodSelector
  },
  props: {
    paymentMethods: {
      type: Array,
      required: true
    },
    value: {
      type: [String, Number],
      required: true
    }
  },
  data() {
    return {
      localPaymentMethods: this.paymentMethods,
      selectedPaymentMethod: null,
      selecting: false,
      creating: false
    }
  },
  computed: {
    userHasPaymentMethods() {
      return this.paymentMethods.length
    },
    defaultPaymentMethod() {
      return this.localPaymentMethods.find(method => method.default)
    }
  },
  watch: {
    selectedPaymentMethod() {
      this.$emit('input', this.selectedPaymentMethod.id)
    }
  },
  mounted() {
    if (this.userHasPaymentMethods) {
      this.switchPaymentMethod(this.defaultPaymentMethod)
    }
  },
  methods: {
    switchPaymentMethod(paymentMethod) {
      this.selectedPaymentMethod = paymentMethod
      this.selecting = false
      this.creating = false
    },
    addPaymentMethod(paymentMethod) {
      this.localPaymentMethods.push(paymentMethod)
      this.switchPaymentMethod(paymentMethod)
    }
  }
}
</script>
