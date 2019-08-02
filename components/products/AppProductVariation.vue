<template>
  <div>
    <!-- Label -->
    <AppFormLabel :label="type"/>
    <!-- Select -->
    <AppFormSelect
      name="variation"
      :errors="errors">
      <option
        v-for="variation in variations"
        :key="variation.id"
        :value="variation.id">
        {{ variation.name }}

        <template v-if="variation.price_varies">
          ({{ variation.price.formatted }})
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
    }
  },
  data() {
    return {
      errors: {}
    }
  }
}
</script>
