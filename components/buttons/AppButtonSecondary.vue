<template>
  <button
    :type="type"
    :disabled="disabled"
    :class="{
      'text-sm font-bold px-2': size === 'mini',
      'text-sm font-bold px-4 py-3': size === 'normal',
      'text-xl font-extrabold tracking-wide px-6 py-4': size === 'large'
    }"
    class="rounded-lg border border-transparent bg-gray-200 hover:bg-gray-300 text-gray-600 hover:text-gray-700 disabled:text-gray-200 uppercase text-center disabled:cursor-not-allowed"
  >
    <slot>
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
    size: {
      type: String,
      required: false,
      default: 'normal'
    }
  }
}
</script>
