<template>
  <div class="relative">
    <select
      :id="name"
      :name="name"
      :disabled="disabled"
      :value="value"
      :aria-label="ariaLabel"
      :required="required"
      :class="{ 'border-red-500': errors[name] }"
      class="block w-full appearance-none bg-gray-200 disabled:bg-white rounded-lg text-lg leading-tight text-gray-900 outline-none border border-transparent disabled:border-gray-200 disabled:cursor-not-allowed px-4 py-3"
      @change="$emit('input', $event.target.value)"
    >
      <option
        v-if="!value"
        value=""
        selected
        disabled
      >
        Select
      </option>
      <slot/>
    </select>
    <div
      v-show="!disabled"
      class="absolute right-0 inset-y-0 flex justify-center items-center select-none"
    >
      <IconCaretDown class="h-6 mr-4"/>
    </div>
  </div>
</template>

<script>
import IconCaretDown from '@/components/icons/IconCaretDown'

export default {
  components: {
    IconCaretDown
  },
  props: {
    name: {
      type: String,
      required: true
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    value: {
      type: [String, Number],
      required: false,
      default: null
    },
    ariaLabel: {
      type: String,
      required: false,
      default: ''
    },
    errors: {
      type: Object,
      required: true
    },
    required: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}
</script>
