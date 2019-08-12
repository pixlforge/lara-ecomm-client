<template>
  <div class="bg-pink-500 text-white">
    <div class="container flex flex-col md:flex-row justify-between items-center mx-auto px-4 py-8">
      <div class="text-xl font-black uppercase tracking-wide">
        <nuxt-link :to="{ name: 'index' }">
          Lara Ecomm
        </nuxt-link>
      </div>
      <ul class="flex font-bold -mx-4 mt-8 md:mt-0">

        <!-- Guest -->
        <template v-if="!$auth.loggedIn">
          <li class="mx-4">
            <nuxt-link :to="{ name: 'login' }">
              Login
            </nuxt-link>
          </li>
          <li class="mx-4">
            <nuxt-link :to="{ name: 'login' }">
              Register
            </nuxt-link>
          </li>
        </template>

        <!-- Authenticated user -->
        <template v-else>
          <li class="mx-4">
            {{ $auth.user.name }}
          </li>
          <li class="mx-4">
            Orders
          </li>
          <li class="mx-4">
            <nuxt-link :to="{ name: 'cart' }">
              Cart ({{ count }})
            </nuxt-link>
          </li>
        </template>

      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      count: 'cart/count'
    })
  }
}
</script>
