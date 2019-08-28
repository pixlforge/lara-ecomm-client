<template>
  <div>
    <form @submit.prevent="store">

      <!-- Name -->
      <div class="my-8">
        <AppFormLabel name="name">
          Name
        </AppFormLabel>
        <AppFormInput
          v-model="form.name"
          :errors="errors"
          name="name"
          required
        />
        <AppFormValidation
          :errors="errors"
          name="name"
        />
      </div>

      <!-- Address 1 -->
      <div class="my-8">
        <AppFormLabel name="address_1">
          Address
        </AppFormLabel>
        <AppFormInput
          v-model="form.address_1"
          :errors="errors"
          name="address_1"
          required
        />
        <AppFormValidation
          :errors="errors"
          name="address_1"
        />
      </div>

      <!-- Postal code -->
      <div class="my-8">
        <AppFormLabel name="postal_code">
          Postal Code
        </AppFormLabel>
        <AppFormInput
          v-model="form.postal_code"
          :errors="errors"
          name="postal_code"
          required
        />
        <AppFormValidation
          :errors="errors"
          name="postal_code"
        />
      </div>

      <!-- City -->
      <div class="my-8">
        <AppFormLabel name="city">
          City
        </AppFormLabel>
        <AppFormInput
          v-model="form.city"
          :errors="errors"
          name="city"
          required
        />
        <AppFormValidation
          :errors="errors"
          name="city"
        />
      </div>

      <!-- Country -->
      <div class="my-8">
        <AppCountryDropdown
          v-model.number="form.country_id"
          :errors="errors"
        />
      </div>

      <!-- Controls -->
      <div class="my-8">

        <!-- Submit -->
        <AppButtonPrimary
          label="Add address"
          type="submit"
        />

        <!-- Cancel -->
        <AppButtonSecondary
          label="Cancel"
          type="button"
          @click.native="$emit('address-creator:close') "
        />
      </div>
    </form>
  </div>
</template>

<script>
import AppFormInput from '@/components/forms/AppFormInput'
import AppFormLabel from '@/components/forms/AppFormLabel'
import AppFormValidation from '@/components/forms/AppFormValidation'
import AppButtonPrimary from '@/components/buttons/AppButtonPrimary'
import AppCountryDropdown from '@/components/forms/AppCountryDropdown'
import AppButtonSecondary from '@/components/buttons/AppButtonSecondary'

export default {
  components: {
    AppFormInput,
    AppFormLabel,
    AppFormValidation,
    AppButtonPrimary,
    AppCountryDropdown,
    AppButtonSecondary
  },
  data() {
    return {
      form: {
        name: '',
        address_1: '',
        postal_code: '',
        city: '',
        country_id: '',
        default: true
      },
      errors: {}
    }
  },
  methods: {
    async store() {
      try {
        const res = await this.$axios.$post('/addresses', this.form)
        this.$emit('address:created', res.data)
      } catch (e) {
        this.errors = e.response.data.errors
      }
    }
  }
}
</script>
