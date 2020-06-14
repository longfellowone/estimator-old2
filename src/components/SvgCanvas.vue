<template>
  <svg
    ref="svgRef"
    class="bg-blue-500 w-full h-full"
    style="user-select: none;"
  >
    <g ref="dawingRef" :transform="transformStr">
      <image
        href="../assets/drawing.jpg"
        width="14400"
        height="10800"
        style="user-select: none;"
        @dragstart.prevent
      />
    </g>
  </svg>
</template>

<script lang="ts">
import { ref, onMounted } from 'vue'
import * as d3 from 'd3'

export default {
  name: 'SvgCanvas',
  components: {},
  props: { data: { type: Array, default: () => [] } },
  setup() {
    const svgRef = ref()
    const drawingRef = ref()
    const transformStr = ref('')
    const mousePosition = ref({ x: 0, y: 0 })

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
      const initialTransform = d3.zoomIdentity.translate(1, 1).scale(0.1)

      d3.select(svgRef.value).call(zoom).call(zoom.transform, initialTransform)

      d3.select(drawingRef.value)
        .on('click', () => {
          // const x = parseInt(d3.mouse(canvasRef.value)[0]);
          // const y = parseInt(d3.mouse(canvasRef.value)[1]);
          // console.log(x, y);
        })
        .on('mousemove', () => {
          const x = d3.mouse(drawingRef.value)[0]
          const y = d3.mouse(drawingRef.value)[1]

          mousePosition.value = { x, y }
        })
    })

    const clickHandler = () => console.log('box clicked')

    return { svgRef, drawingRef, transformStr }
  },
}
</script>
