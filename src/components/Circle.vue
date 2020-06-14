<template functional>
  <!-- <use xlink:href="#circle" :x="x" :y="y" /> -->
  <circle :cx="x" :cy="y" :r="r" />
</template>

<script lang="ts">
export default {
  name: 'Circle',
  props: {
    x: { type: Number, default: 0 },
    y: { type: Number, default: 0 },
    r: { type: Number, default: 0 },
  },
}
</script>
