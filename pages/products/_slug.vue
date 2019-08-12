<template>
  <main class="flex flex-col md:flex-row px-4">

    <!-- Image -->
    <div class="md:w-1/2 md:pr-8 mb-16 md:mb-0">
      <img
        src="https://via.placeholder.com/620x620"
        :alt="product.name"
        class="rounded-lg shadow-lg"
      >
    </div>

    <!-- Content -->
    <div class="md:w-1/2 md:pl-8">

      <!-- Product name -->
      <h1 class="text-3xl font-bold">
        {{ product.name }}
      </h1>

      <!-- Description -->
      <p
        v-if="product.description"
        class="text-gray-700 leading-relaxed my-8"
      >
        {{ product.description }}
      </p>

      <!-- Infos -->
      <div class="flex justify-between items-center">
        <AppPriceLabel :price="product.price"/>

        <AppLabel
          v-if="!product.in_stock"
          label="Out of stock"
        />
      </div>

      <hr class="border-b border-gray-200 my-12">

      <section class="mt-12">
        <form @submit.prevent>

          <!-- Variations -->
          <AppProductVariation
            v-for="(variations, type) in product.variations"
            :key="type"
            v-model="form.variation"
            :type="type"
            :variations="variations"
            class="my-12"
          />

          <!-- Quantity -->
          <AppFormLabel label="Quantity"/>
          <AppFormSelect
            v-model.number="form.quantity"
            :disabled="!variationSelected"
            name="quantity"
            :errors="errors"
            required
          >
            <option
              v-for="n in form.variation.stock_count"
              :key="n"
              :value="n"
            >
              {{ n }}
            </option>
          </AppFormSelect>

          <AppButtonPrimary
            :disabled="!variationSelected"
            label="Add to cart"
            type="submit"
            class="my-12"
          />
        </form>
      </section>
    </div>
  </main>
</template>

<script>
import AppLabel from '@/components/labels/AppLabel'
import AppFormLabel from '@/components/forms/AppFormLabel'
import AppFormSelect from '@/components/forms/AppFormSelect'
import AppPriceLabel from '@/components/labels/AppPriceLabel'
import AppButtonPrimary from '@/components/buttons/AppButtonPrimary'
import AppProductVariation from '@/components/products/AppProductVariation'

export default {
  components: {
    AppLabel,
    AppFormLabel,
    AppFormSelect,
    AppPriceLabel,
    AppButtonPrimary,
    AppProductVariation
  },
  data() {
    return {
      form: {
        variation: {},
        quantity: 1
      },
      errors: {}
    }
  },
  computed: {
    variationSelected() {
      return this.form.variation.id
    }
  },
  watch: {
    'form.variation'() {
      this.form.quantity = 1
    }
  },
  async asyncData({ app, params }) {
    const product = await app.$axios.$get(`/products/${params.slug}`)

    return {
      product: product.data
    }
  }
}
</script>
