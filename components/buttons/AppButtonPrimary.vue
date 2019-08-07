<template>
  <button
    :type="type"
    :disabled="disabled"
    :class="`bg-${color}-400 hover:bg-${color}-500 disabled:bg-white`"
    class="rounded-lg border border-transparent disabled:border-gray-200 text-sm text-white disabled:text-gray-200 font-bold uppercase shadow-xl disabled:shadow-none disabled:cursor-not-allowed px-4 py-3"
  >
    <slot name="label">
      {{ label }}
    </slot>
  </button>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: false,
      default: ''
    },
    type: {
      type: String,
      required: false,
      default: ''
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    color: {
      type: String,
      required: false,
      default: 'pink'
    }
  }
}
</script>
