<template>
  <div class="container px-4 mx-auto">
    <ul class="flex">
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
  computed: {
    ...mapGetters({
      categories: 'categories'
    })
  }
}
</script>
