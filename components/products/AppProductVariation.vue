<template>
  <div>

    <!-- Label -->
    <AppFormLabel :label="type"/>

    <!-- Select -->
    <AppFormSelect
      name="variation"
      :value="selectedVariationId"
      :errors="errors"
      @change.native="changed($event)"
    >
      <option
        v-for="variation in variations"
        :key="variation.id"
        :value="variation.id"
        :disabled="!variation.in_stock"
      >
        {{ variation.name }}
        <template v-if="variation.price_varies">
          ({{ variation.price.formatted }})
        </template>

        <template v-if="!variation.in_stock">
          (Out of stock)
        </template>
      </option>
    </AppFormSelect>
  </div>
</template>

<script>
import AppFormLabel from '@/components/forms/AppFormLabel'
import AppFormSelect from '@/components/forms/AppFormSelect'

export default {
  components: {
    AppFormLabel,
    AppFormSelect
  },
  props: {
    type: {
      type: String,
      required: true
    },
    variations: {
      type: Array,
      required: true
    },
    value: {
      type: Object,
      required: false,
      default: () => {
        return {}
      }
    }
  },
  data() {
    return {
      errors: {}
    }
  },
  computed: {
    selectedVariationId() {
      if (!this.findVariation(this.value.id)) {
        return ''
      }

      return this.value.id
    }
  },
  methods: {
    changed(event) {
      this.$emit('input', this.findVariation(event.target.value))
    },
    findVariation(id) {
      return this.variations.find(variation => variation.id === parseInt(id))
    }
  }
}
</script>
