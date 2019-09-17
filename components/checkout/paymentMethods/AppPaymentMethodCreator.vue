<template>
  <form @submit.prevent="store">

    <!-- Stripe elements container -->
    <div class="max-w-lg rounded-lg border-2 border-gray-300 p-8 my-10">
      <div id="stripe-elements"/>
    </div>

    <!-- Submit -->
    <AppButtonPrimary
      :disabled="storing"
      label="Add card"
      type="submit"
    />

    <!-- Cancel -->
    <AppButtonSecondary
      :disabled="storing"
      label="Cancel"
      type="button"
      @click.native="$emit('add-card:cancel')"
    />
  </form>
</template>

<script>
import AppButtonPrimary from '@/components/buttons/AppButtonPrimary'
import AppButtonSecondary from '@/components/buttons/AppButtonSecondary'

export default {
  components: {
    AppButtonPrimary,
    AppButtonSecondary
  },
  data() {
    return {
      storing: false,
      stripe: null,
      card: {},
      options: {
        style: {
          base: {
            fontSize: '16px'
          }
        }
      }
    }
  },
  mounted() {
    this.initStripeElements()
  },
  methods: {
    async store() {
      this.storing = true

      const { token, error } = await this.stripe.createToken(this.card)

      if (error) {
        console.log(error)
      } else {
        const res = await this.$axios.$post('/payment-methods', {
          token: token.id
        })
        this.$emit('add-card:added', res.data)
      }

      this.storing = false
    },
    initStripeElements() {
      this.stripe = window.Stripe(process.env.STRIPE_PUBLIC)
      this.card = this.stripe.elements().create('card', this.options)
      this.card.mount('#stripe-elements')
    }
  }
}
</script>
