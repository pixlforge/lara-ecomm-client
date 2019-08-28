<template>
  <p
    v-if="errorPresent"
    class="absolute text-xs text-red-500 mt-1"
  >
    {{ errorMessage }}
  </p>
</template>

<script>
export default {
  props: {
    errors: {
      type: Object,
      required: false,
      default: () => {
        return {}
      }
    },
    name: {
      type: String,
      required: true
    }
  },
  computed: {
    errorPresent() {
      return this.errors[this.name]
    },
    errorMessage() {
      return this.errors[this.name][0]
    }
  }
}
</script>
