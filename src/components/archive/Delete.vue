<template>
  <svg
    ref="containerRef"
    class="bg-blue-500 w-full h-full"
    style="user-select: none;"
  >
    <g id="canvas" ref="canvasRef" :transform="transformStr">
      <image
        href="../assets/drawing.jpg"
        width="14400"
        height="10800"
        style="user-select: none;"
        @dragstart.prevent
      />
      <circle
        v-for="item in data"
        :key="item"
        :cx="item.x"
        :cy="item.y"
        r="30"
        fill="green"
        fill-opacity="0.4"
        @click="clickHandler"
      />
      <circle
        :cx="mousePosition.x"
        :cy="mousePosition.y"
        r="30"
        fill="green"
        fill-opacity="0.4"
        style="pointer-events: none;"
      />
      <circle
        :cx="newPosition.x"
        :cy="newPosition.y"
        r="500"
        fill="blue"
        fill-opacity="0.4"
        @mousedown="dragStartHandler(3000, 1000)"
        @mouseup="dragEndHandler"
      />
    </g>
    <!-- <g id="markup" :transform="transformStr">
      <circle
        v-for="item in data"
        :key="item"
        :cx="item.x"
        :cy="item.y"
        r="30"
        fill="green"
        opacity="0.4"
        @click="clickHandler"
      />
    </g>
    <g id="draw" :transform="transformStr">
      <circle
        :cx="mousePosition.x"
        :cy="mousePosition.y"
        r="30"
        fill="green"
        opacity="1"
        style="pointer-events: none;"
      />
    </g>-->
  </svg>
</template>

<script>
import { ref, onMounted, computed } from "vue";
// import { zoom } from 'd3-zoom'
// import { select }from "d3-selection";
import * as d3 from "d3";

export default {
  name: "Canvas",
  props: {
    data: { type: Array, default: () => [] },
  },
  setup() {
    const canvasRef = ref(null);
    const containerRef = ref(null);
    const transformStr = ref(null);

    const mousePosition = ref({ x: 0, y: 0 });

    const zoom = d3
      .zoom()
      // .extent([[0, 0], [width, height]])
      .scaleExtent([0.04, 2])
      // Returning false in the filter function ignores the event.
      .filter(
        () =>
          !(d3.event.type === "mousedown" && d3.event.button === 0) ||
          d3.event.button === 2
      )
      .on("zoom", () => zooming(d3.event));

    const zooming = (e) => (transformStr.value = `${e.transform}`);

    onMounted(() => {
      const initialTransform = d3.zoomIdentity.translate(1, 1).scale(0.1);

      d3.select(containerRef.value)
        .call(zoom)
        .call(zoom.transform, initialTransform);

      d3.select(canvasRef.value)
        .on("click", () => {
          // const x = parseInt(d3.mouse(canvasRef.value)[0]);
          // const y = parseInt(d3.mouse(canvasRef.value)[1]);
          // console.log(x, y);
        })
        .on("mousemove", () => {
          const x = d3.mouse(canvasRef.value)[0];
          const y = d3.mouse(canvasRef.value)[1];

          mousePosition.value = { x, y };
        });
    });

    const clickHandler = () => console.log("box clicked");

    const dragging = ref(false);
    const offset = ref(null);

    const dragStartHandler = (x, y) => {
      offset.value = {
        x: x - mousePosition.value.x,
        y: y - mousePosition.value.y,
      };

      dragging.value = true;
    };

    const dragEndHandler = () => {
      dragging.value === true && (dragging.value = false);
    };

    const newPosition = computed(() =>
      dragging.value
        ? {
            x: mousePosition.value.x + offset.value.x,
            y: mousePosition.value.y + offset.value.y,
          }
        : {
            x: 3000,
            y: 1000,
          }
    );

    return {
      containerRef,
      canvasRef,
      transformStr,
      dragging,
      newPosition,
      clickHandler,
      dragStartHandler,
      dragEndHandler,
      mousePosition,
    };
  },
};
</script>
