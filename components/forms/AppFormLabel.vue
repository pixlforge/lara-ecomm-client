<template>
  <label class="font-bold uppercase text-pink-400">
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
