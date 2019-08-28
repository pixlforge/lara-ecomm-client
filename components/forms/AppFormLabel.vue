<template>
  <label
    :for="name"
    class="inline-block text-sm font-bold uppercase text-pink-400 mb-2"
  >
    <slot>
      {{ label }}
    </slot>
  </label>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: false,
      default: ''
    }
  }
}
</script>
