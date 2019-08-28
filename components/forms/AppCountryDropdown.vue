<template>
  <div>
    <AppFormLabel name="country">
      Country
    </AppFormLabel>
    <AppFormSelect
      :value="value"
      :errors="errors"
      name="country"
      required
      @change.native="$emit('input', $event.target.value)"
    >
      <option
        v-for="country in countries"
        :key="country.id"
        :value="country.id"
      >
        {{ country.name }}
      </option>
    </AppFormSelect>
    <AppFormValidation
      :errors="errors"
      name="country"
    />
  </div>
</template>

<script>
import AppFormLabel from '@/components/forms/AppFormLabel'
import AppFormSelect from '@/components/forms/AppFormSelect'
import AppFormValidation from '@/components/forms/AppFormValidation'

export default {
  components: {
    AppFormLabel,
    AppFormSelect,
    AppFormValidation
  },
  props: {
    value: {
      type: [Number, String],
      required: true
    },
    errors: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      countries: []
    }
  },
  mounted() {
    this.getCountries()
  },
  methods: {
    async getCountries() {
      const countries = await this.$axios.$get('/countries')
      this.countries = countries.data
    }
  }
}
</script>
