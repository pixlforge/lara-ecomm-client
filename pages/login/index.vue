<template>
  <main class="max-w-xl mx-auto">

    <!-- Page title -->
    <h1 class="text-3xl font-extrabold text-gray-800 mb-16">
      Login to your account
    </h1>

    <form @submit.prevent="login">

      <!-- Email -->
      <div class="my-8">
        <AppFormLabel
          name="email"
          label="Email"
        />
        <AppFormInput
          v-model="form.email"
          name="email"
          :errors="errors"
          type="email"
          placeholder="elon@musk.com"
        />
      </div>

      <!-- Password -->
      <div class="my-8">
        <AppFormLabel
          name="password"
          label="Password"
        />
        <AppFormInput
          v-model="form.password"
          name="password"
          :errors="errors"
          type="password"
        />
      </div>

      <div>
        <AppButtonPrimary
          :disabled="!form.email"
          type="submit"
          label="Log in"
        />
      </div>
    </form>

  </main>
</template>

<script>
import AppFormLabel from '@/components/forms/AppFormLabel'
import AppFormInput from '@/components/forms/AppFormInput'
import AppButtonPrimary from '@/components/buttons/AppButtonPrimary'

export default {
  components: {
    AppFormLabel,
    AppFormInput,
    AppButtonPrimary
  },
  data() {
    return {
      form: {
        email: '',
        password: ''
      },
      errors: {}
    }
  },
  methods: {
    async login() {
      await this.$auth.loginWith('local', {
        data: this.form
      })
    }
  }
}
</script>
