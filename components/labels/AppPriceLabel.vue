<template>
  <span
    :class="`bg-${color}-400`"
    class="inline-block rounded-full font-bold uppercase leading-relaxed px-4">
    <span
      :class="`text-${color}-200`"
      class="text-sm">
      {{ price.detailed.currency }}
    </span>
    <span class="text-2xl text-white">
      <slot>
        {{ price.detailed.amount }}
      </slot>
    </span>
  </span>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      required: false,
      default: 'pink'
    },
    price: {
      type: Object,
      required: true
    }
  }
}
</script>
