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
      <g fill="green" fill-opacity="0.5">
        <Circle
          v-if="drawing"
          :x="mousePosition.x"
          :y="mousePosition.y"
          :r="30"
          style="cursor: crosshair;"
        />
        <Circle
          v-for="node in data"
          :key="node.id"
          :id="node.id"
          :x="node.x"
          :y="node.y"
          :r="node.r"
          :dragging="node.dragging"
          @start-drag-node="startDragNode"
          @end-drag-node="endDragNode"
        />
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
  props: { data: { type: Array, default: (): Node[] => [] } },
  setup(): any {
    const store = useStore()

    const svgRef = ref()
    const drawingRef = ref()
    const transformStr = ref('')
    const mousePosition = ref({ x: 0, y: 0 })
    const lastUpdateCall = ref(0)
    const drawing = ref(true)
    const dragging = ref(false)

    const zooming = (e: any) => (transformStr.value = `${e.transform}`)

    const zoom = d3
      .zoom()
      .scaleExtent([0.04, 2])
      .filter(
        () =>
          !(d3.event.type === 'mousedown' && d3.event.button === 0) ||
          d3.event.button === 2
      )
      .on('zoom', () => zooming(d3.event))

    onMounted(() => {
      const initialTransform = d3.zoomIdentity.translate(1, 1).scale(0.2)

      d3.select(svgRef.value).call(zoom).call(zoom.transform, initialTransform)

      d3.select(drawingRef.value)
        .on('click', () => {
          if (!drawing.value) return

          const x = ~~d3.mouse(drawingRef.value)[0]
          const y = ~~d3.mouse(drawingRef.value)[1]

          const node = {
            id: 1000,
            x: x,
            y: y,
            r: 30,
          }

          store.commit('createNode', node)
        })
        .on('mousemove', () => {
          const x = d3.mouse(drawingRef.value)[0]
          const y = d3.mouse(drawingRef.value)[1]

          if (lastUpdateCall.value !== 0)
            cancelAnimationFrame(lastUpdateCall.value)

          lastUpdateCall.value = requestAnimationFrame(() => {
            lastUpdateCall.value = 0
            mousePosition.value = { x, y }

            if (dragging.value) store.commit('draggingNode', { x, y })
          })
        })
      // .on('mouseleave', () => (drawing.value = !drawing.value))
    })

    const startDragNode = (id: number) => {
      // Todo: Factor in offset
      if (drawing.value === true) return
      dragging.value = true
      store.commit('startDragNode', id)
    }

    const endDragNode = () => {
      dragging.value = false
      store.commit('endDragNode')
    }

    return {
      svgRef,
      drawingRef,
      transformStr,
      mousePosition,
      startDragNode,
      endDragNode,
      drawing,
      dragging,
    }
  },
}
</script>
