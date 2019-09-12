<template>
  <div>

    <!-- Page title -->
    <h1 class="text-3xl font-extrabold text-gray-800 mb-16">
      Orders index
    </h1>

    <section>
      <ul class="rounded-lg border border-gray-300">
        <Order
          v-for="n in 10"
          :key="n"
        />
      </ul>
    </section>

  </div>
</template>

<script>
import Order from '@/components/orders/Order'

export default {
  components: {
    Order
  }
}
</script>
