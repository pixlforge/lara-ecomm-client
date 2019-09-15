<template>
  <div>
    <ul>
      <li
        v-for="paymentMethod in paymentMethods"
        :key="paymentMethod.id"
      >
        <ul
          :class="{ 'font-bold': paymentMethod.id === selectedPaymentMethod.id }"
          class="text-gray-900 cursor-pointer mt-6"
          @click.prevent="$emit('payment-method:selected', paymentMethod)"
        >
          <li>
            {{ paymentMethod.card_type }}
          </li>
          <li>
            {{ paymentMethod.last_four }}
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    paymentMethods: {
      type: Array,
      required: true
    },
    selectedPaymentMethod: {
      type: Object,
      required: true
    }
  }
}
</script>
