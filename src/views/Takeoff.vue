<template>
  <div class="h-screen flex flex-col">
    <div class="bg-gray-400 h-8 flex items-center justify-center">Empty</div>
    <div class="flex flex-1 bg-gray-200 p-4">
      <div class="flex h-full w-full bg-green-500 items-center justify-center">
        <SvgCanvas :data="data" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useStore } from 'vuex'
import state from '../store/state'

import SvgCanvas from '../components/SvgCanvas.vue'

export default {
  name: 'Takeoff',
  components: {
    SvgCanvas,
  },
  props: {},
  setup() {
    const store = useStore()

    return { data: store.state.nodes }
  },
}
</script>
