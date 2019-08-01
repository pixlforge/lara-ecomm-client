<template>
  <main class="flex flex-col md:flex-row px-4">
    <div class="md:w-1/2 md:pr-8 mb-16 md:mb-0">
      <img
        src="https://via.placeholder.com/620x620"
        :alt="product.name"
        class="rounded-lg shadow-lg">
    </div>
    <div class="md:w-1/2 md:pl-8">
      <h1 class="text-3xl font-bold">
        {{ product.name }}
      </h1>
      <p
        v-if="product.description"
        class="text-gray-700 leading-relaxed my-8">
        {{ product.description }}
      </p>
      <AppPriceLabel :price="product.price"/>
    </div>
  </main>
</template>

<script>
import AppPriceLabel from '@/components/labels/AppPriceLabel';

export default {
  components: {
    AppPriceLabel
  },
  async asyncData({ app, params }) {
    const product = await app.$axios.$get(`/products/${params.slug}`);

    return {
      product: product.data
    }
  }
}
</script>
