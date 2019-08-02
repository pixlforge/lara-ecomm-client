<template>
  <div>
    <template v-if="hasChildren">
      <div class="relative block border-b-4 border-transparent hover:border-pink-400 text-base md:text-lg font-bold hover:text-gray-800 uppercase group cursor-pointer p-8">
        {{ category.name }}
        <ul class="absolute left-0 min-w-64 hidden group-hover:block bg-white rounded-lg shadow-2xl py-6 z-10">
          <li
            v-for="subcategory in category.children"
            :key="subcategory.slug">
            <nuxt-link
              :to="{ name: 'categories-slug', params: { slug: subcategory.slug } }"
              class="block hover:bg-pink-400 text-base capitalize font-semibold hover:text-white px-6 py-3">
              {{ subcategory.name }}
            </nuxt-link>
          </li>
        </ul>
      </div>
    </template>
    <template v-else>
      <nuxt-link
        :to="{ name: 'categories-slug', params: { slug: category.slug } }"
        class="block border-b-4 border-transparent hover:border-pink-400 text-base md:text-lg font-bold hover:text-gray-800 uppercase p-8">
        {{ category.name }}
      </nuxt-link>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    category: {
      type: Object,
      required: true
    }
  },
  computed: {
    hasChildren() {
      return this.category.children.length
    }
  }
}
</script>
