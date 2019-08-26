<template>
  <div class="border-l-8 border-gray-400 px-4 py-6 my-8">
    <h1 class="text-2xl font-semibold text-gray-900">
      Ship to
    </h1>

    <template v-if="selectedAddress">
      <ul class="text-gray-900 mt-6">
        <li>
          {{ selectedAddress.name }}
        </li>
        <li>
          {{ selectedAddress.address_1 }}
        </li>
        <li>
          {{ selectedAddress.country.code }} &ndash; {{ selectedAddress.postal_code }} {{ selectedAddress.city }}
        </li>
      </ul>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    addresses: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      localAddresses: this.addresses,
      selectedAddress: null
    }
  },
  computed: {
    userHasAddresses() {
      return this.addresses.length
    },
    defaultAddress() {
      return this.localAddresses.find(address => address.default)
    }
  },
  mounted() {
    if (this.userHasAddresses) {
      this.switchAddress(this.defaultAddress)
    }
  },
  methods: {
    switchAddress(address) {
      this.selectedAddress = address
    }
  }
}
</script>
