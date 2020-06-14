<template>
  <svg
    ref="svgRef"
    class="bg-blue-500 w-full h-full"
    style="user-select: none;"
  >
    <g ref="drawingRef" :transform="transformStr">
      <image
        href="../assets/drawing.jpg"
        width="14400"
        height="10800"
        style="user-select: none;"
        @dragstart.prevent
      />
      <!-- <symbol id="circle">
        <circle cx="30" cy="30" r="30" />
      </symbol> -->
      <g fill="green" fill-opacity="0.5">
        <Circle
          v-if="drawing"
          :x="mousePosition.x"
          :y="mousePosition.y"
          :r="30"
          style="pointer-events: none;"
        ></Circle>
      </g>
      <g fill="green" fill-opacity="0.5">
        <Circle
          v-for="item in data"
          :key="item.id"
          :x="item.x"
          :y="item.y"
          :r="item.r"
          @click="clickHandler"
        ></Circle>
      </g>
    </g>
  </svg>
</template>

<script lang="ts">
import { ref, onMounted } from 'vue'
import { useStore } from 'vuex'
import * as d3 from 'd3'

import Circle from './Circle.vue'

export default {
  name: 'SvgCanvas',
  components: {
    Circle,
  },
  props: { data: { type: Array, default: () => [] } },
  setup() {
    const store = useStore()

    const svgRef = ref()
    const drawingRef = ref()
    const transformStr = ref('')
    const mousePosition = ref({ x: 0, y: 0 })
    const lastUpdateCall = ref(0)
    const drawing = ref(true)

    const zoom = d3
      .zoom()
      .scaleExtent([0.04, 2])
      .filter(
        () =>
          !(d3.event.type === 'mousedown' && d3.event.button === 0) ||
          d3.event.button === 2
      )
      .on('zoom', () => zooming(d3.event))

    const zooming = e => (transformStr.value = `${e.transform}`)

    onMounted(() => {
      const initialTransform = d3.zoomIdentity.translate(1, 1).scale(0.05)

      d3.select(svgRef.value).call(zoom).call(zoom.transform, initialTransform)

      d3.select(drawingRef.value)
        .on('click', () => {
          const x = ~~d3.mouse(drawingRef.value)[0]
          const y = ~~d3.mouse(drawingRef.value)[1]

          const node = {
            id: 1000,
            x: x,
            y: y,
            r: 30,
          }

          store.commit('test', node)
        })
        .on('mousemove', () => {
          const x = d3.mouse(drawingRef.value)[0]
          const y = d3.mouse(drawingRef.value)[1]

          if (lastUpdateCall.value !== 0)
            cancelAnimationFrame(lastUpdateCall.value)

          lastUpdateCall.value = requestAnimationFrame(() => {
            mousePosition.value = { x, y }
            lastUpdateCall.value = 0
          })
        })
        .on('mouseleave', () => (drawing.value = !drawing.value))
    })

    const clickHandler = () => console.log('box clicked')

    return {
      svgRef,
      drawingRef,
      transformStr,
      mousePosition,
      clickHandler,
      drawing,
    }
  },
}
</script>
