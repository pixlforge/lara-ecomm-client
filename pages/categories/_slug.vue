<template>
  <section>
    <!-- Page title -->
    <h1 class="text-3xl font-extrabold text-gray-800 mb-16">
      Products for a category
    </h1>
    <!-- Products -->
    <div class="flex flex-wrap -mx-4">
      <AppProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
  </section>
</template>

<script>
import AppProductCard from '@/components/products/AppProductCard'

export default {
  components: {
    AppProductCard
  },
  async asyncData({ app, params }) {
    const res = await app.$axios.$get(`/products?category=${params.slug}`)

    return {
      products: res.data
    }
  }
}
</script>
