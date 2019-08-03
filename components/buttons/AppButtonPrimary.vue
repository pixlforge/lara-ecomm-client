<template>
  <button
    :type="type"
    :disabled="disabled"
    :class="[
      disabled
        ? 'bg-white text-gray-200 border-gray-200 cursor-not-allowed shadow-none'
        : `bg-${color}-400 hover:bg-${color}-500`,
      {}
    ]"
    class="rounded-lg border border-transparent text-sm text-white font-bold uppercase shadow-xl px-4 py-3"
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
