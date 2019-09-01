<template>
  <div class="border-l-8 border-gray-400 px-4 py-6 my-8">
    <h1 class="text-2xl font-semibold text-gray-900">
      Ship to
    </h1>

    <!-- Select an address -->
    <template v-if="selecting">
      <AppShippingAddressSelector
        :addresses="addresses"
        :selected-address="selectedAddress"
        @address:selected="switchAddress"
      />
    </template>

    <!-- Create an address -->
    <template v-else-if="creating">
      <AppShippingAddressCreator
        @address:created="addAddress"
        @address-creator:close="creating = false"
      />
    </template>

    <!-- Current shipping address -->
    <template v-else>
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

      <div class="mt-6">
        <AppButtonPrimary
          label="Change shipping address"
          @click.native="selecting = true"
        />
        <AppButtonPrimary
          label="Add an address"
          @click.native="creating = true"
        />
      </div>
    </template>

  </div>
</template>

<script>
import AppButtonPrimary from '@/components/buttons/AppButtonPrimary'
import AppShippingAddressCreator from '@/components/checkout/addresses/AppShippingAddressCreator'
import AppShippingAddressSelector from '@/components/checkout/addresses/AppShippingAddressSelector'

export default {
  components: {
    AppButtonPrimary,
    AppShippingAddressCreator,
    AppShippingAddressSelector
  },
  props: {
    addresses: {
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
      localAddresses: this.addresses,
      selectedAddress: null,
      selecting: false,
      creating: false
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
  watch: {
    selectedAddress() {
      this.$emit('input', this.selectedAddress.id)
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
      this.selecting = false
      this.creating = false
    },
    addAddress(address) {
      this.localAddresses.push(address)
      this.switchAddress(address)
    }
  }
}
</script>
