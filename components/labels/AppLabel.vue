<template>
  <span
    :class="`bg-${color}-400`"
    class="rounded-full font-extrabold text-white px-4 py-1"
  >
    <slot>
      {{ label }}
    </slot>
  </span>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: false,
      default: ''
    },
    color: {
      type: String,
      required: false,
      default: 'pink'
    }
  }
}
</script>
