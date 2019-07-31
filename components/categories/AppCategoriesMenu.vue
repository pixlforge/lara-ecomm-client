<template>
  <div class="container px-4 mx-auto">
    <div class="flex md:hidden justify-center pt-8">
      <button
        class="bg-pink-600 hover:bg-pink-800 rounded-lg text-white font-bold uppercase px-4 py-2"
        @click="toggleMenu">
        Categories
      </button>
    </div>
    <ul
      :class="open ? 'absolute block bg-white rounded-lg shadow-lg' : 'hidden'"
      class="md:flex w-full md:w-auto">
      <li
        v-for="category in categories"
        :key="category.slug">
        <AppCategoryLink :category="category"/>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import AppCategoryLink from '@/components/categories/AppCategoryLink';

export default {
  components: {
    AppCategoryLink
  },
  data() {
    return {
      open: false
    };
  },
  computed: {
    ...mapGetters({
      categories: 'categories'
    })
  },
  methods: {
    toggleMenu() {
      this.open = !this.open;
    }
  }
}
</script>
