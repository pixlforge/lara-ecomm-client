<template>
  <li class="text-lg even:bg-gray-100 flex p-6">
    <div class="flex-1">
      {{ order.id }}
    </div>
    <div class="flex-1">
      {{ order.created_at }}
    </div>
    <div class="flex-1">
      {{ order.subtotal.formatted }}
    </div>
    <div class="flex-1">
      {{ order.status }}
    </div>
  </li>
</template>

<script>
export default {
  props: {
    order: {
      type: Object,
      required: true
    }
  }
}
</script>
