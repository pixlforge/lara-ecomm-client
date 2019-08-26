<template>
  <div>
    <ul>
      <li
        v-for="address in addresses"
        :key="address.id"
      >
        <ul
          :class="{ 'font-bold': address.id === selectedAddress.id }"
          class="text-gray-900 cursor-pointer mt-6"
          @click.prevent="$emit('address:selected', address)"
        >
          <li>{{ address.name }}</li>
          <li>{{ address.address_1 }}</li>
          <li>
            {{ address.country.code }} &ndash; {{ address.postal_code }} {{ address.city }}
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    addresses: {
      type: Array,
      required: true
    },
    selectedAddress: {
      type: Object,
      required: true
    }
  }
}
</script>
