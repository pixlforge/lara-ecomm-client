<template>
  <input
    :id="name"
    :name="name"
    :disabled="disabled"
    :type="type"
    :value="value"
    :placeholder="placeholder"
    :required="required"
    :aria-label="ariaLabel"
    :class="{ 'border-red-500': errors[name] }"
    class="block w-full bg-gray-200 disabled:bg-white appearance-none rounded-lg text-16 leading-tight text-gray-900 disabled:text-gray-200 placeholder-gray-500 outline-none focus:shadow-outline border border-transparent disabled:border-gray-200 disabled:cursor-not-allowed px-4 py-3"
    @input="$emit('input', $event.target.value)"
  >
</template>

<script>
export default {
  props: {
    value: {
      type: [String, Number],
      required: false,
      default: null
    },
    name: {
      type: String,
      required: false,
      default: ''
    },
    type: {
      type: String,
      required: false,
      default: 'text'
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    errors: {
      type: Object,
      required: false,
      default: () => {
        return {}
      }
    },
    placeholder: {
      type: String,
      required: false,
      default: ''
    },
    required: {
      type: Boolean,
      required: false,
      default: false
    },
    ariaLabel: {
      type: String,
      required: false,
      default: ''
    }
  }
}
</script>
