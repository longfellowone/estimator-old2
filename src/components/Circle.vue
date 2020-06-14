<template>
  <!-- <use xlink:href="#circle" :x="x" :y="y" /> -->
  <circle
    v-show="!dragging"
    :cx="x"
    :cy="y"
    :r="r"
    @mousedown="$emit('start-drag-node', id)"
    @mousemove="$emit('dragging-node', id)"
    @mouseup="$emit('end-drag-node', id)"
  />
</template>

<script lang="ts">
import { useStore } from 'vuex'

export default {
  name: 'Circle',
  props: {
    id: { type: Number, default: 0 },
    x: { type: Number, default: 0 },
    y: { type: Number, default: 0 },
    r: { type: Number, default: 0 },
    dragging: { type: Boolean, default: false },
  },
  setup() {
    const store = useStore()

    return {}
  },
}
</script>
