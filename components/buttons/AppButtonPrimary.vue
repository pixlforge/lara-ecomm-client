<template>
  <button
    :type="type"
    :disabled="disabled"
    :class="[
      `bg-${color}-400 hover:bg-${color}-500 disabled:bg-white`,
      {
        'text-sm font-bold px-2': size === 'mini',
        'text-sm font-bold px-4 py-3': size === 'normal',
        'text-xl font-extrabold tracking-wide px-6 py-4': size === 'large'
      }
    ]"
    class="rounded-lg border border-transparent disabled:border-gray-200 text-white disabled:text-gray-200 uppercase text-center shadow-xl disabled:shadow-none disabled:cursor-not-allowed"
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
    color: {
      type: String,
      required: false,
      default: 'pink'
    },
    size: {
      type: String,
      required: false,
      default: 'normal'
    }
  }
}
</script>
