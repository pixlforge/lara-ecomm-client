<template>
  <nuxt-link
    :to="{ name: 'products-slug', params: { slug: product.slug } }"
    class="sm:w-1/2 lg:w-1/3 rounded-lg border-2 border-gray-300 hover:border-pink-200 p-8">
    <div class="mb-10">
      <img
        src="https://bulma.io/images/placeholders/1280x960.png"
        alt="Product image"
        class="rounded-lg shadow-xl">
    </div>
    <div class="">
      <!-- Name -->
      <h5 class="text-2xl font-bold text-gray-800">
        {{ product.name }}
      </h5>
      <!-- Description -->
      <p class="leading-relaxed text-gray-800 my-4">
        {{ product.description }}
      </p>
      <!-- Price -->
      <AppPriceLabel :price="product.price"/>
    </div>
  </nuxt-link>
</template>

<script>
import AppPriceLabel from '@/components/labels/AppPriceLabel'

export default {
  components: {
    AppPriceLabel
  },
  props: {
    product: {
      type: Object,
      required: true
    }
  }
}
</script>
