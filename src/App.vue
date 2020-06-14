<template>
  <!-- <div>
    <span>Links:</span>
    <router-link to="/">Home</router-link>
    <router-link to="/Takeoff">Takeoff</router-link>
  </div>-->

  <router-view />
</template>

<script lang="ts">
import { useRoute } from 'vue-router'

export default {
  name: 'App',
  components: {},
  props: {},
  setup() {
    const route = useRoute()

    return { route }
  },
}
</script>
