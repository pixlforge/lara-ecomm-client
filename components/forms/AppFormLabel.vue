<template>
  <label class="inline-block text-sm font-bold uppercase text-pink-400 mb-2">
    {{ label }}
  </label>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    }
  }
}
</script>
