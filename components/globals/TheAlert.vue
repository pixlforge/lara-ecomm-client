<template>
  <div
    v-if="alert"
    class="bg-green-400"
    @click.prevent="clear"
  >
    <div class="container text-xl font-bold text-white text-center py-10 mx-auto">
      {{ alert }}
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      alert: 'alert/message'
    })
  },
  methods: {
    ...mapActions({
      clear: 'alert/clear'
    })
  }
}
</script>
