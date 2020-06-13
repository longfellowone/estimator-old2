https://medium.com/swlh/modular-data-visualizations-with-vue-js-and-d3-87b37392a589

If you don't specify a viewbox, all unitless numbers in an element are assumed to be pixels. (and SVG assumes 90 dpi or pixels per inch for conversion from units like cm to pixels.)

A viewbox lets you make unitless numbers in elements mean "user units" and specifies how those units are mapped to the size. For simplicity, consider just the x coordinates, that is, a ruler. Your viewbox says that your ruler will have 1500 units to match the 200 pixel size width of the svg.

A line element from 0 to 1500 (unitless, i.e. user units) would stretch 200 pixels as drawn, that is, across the width of the svg drawing.

(And since SVG is scalable without loss of resolution, pixels really don't mean much in the real world, when a user zooms in or out.)

Its a coordinate transformation, of sorts.

I suggest you learn from a book like "SVG Essentials", about \$10 used, from which I loosely quote this answer.

---

https://www.html5rocks.com/en/tutorials/speed/animations/
https://gomakethings.com/debouncing-events-with-requestanimationframe-for-better-performance/
https://stackoverflow.com/questions/36098039/javascript-move-element-with-mousemove-event-60-fps-requestanimationframe

var mouseIsDown = false,
lastMousePosition = { x: 0, y: 0 };

function onMouseDown() {
mouseIsDown = true;
requestAnimationFrame(update);
}

function onMouseUp() {
mouseIsDown = false;
}

function onMouseMove(evt) {
lastMousePosition.x = evt.clientX;
lastMousePosition.y = evt.clientY;
}

function update() {
if(mouseIsDown) {
requestAnimationFrame(update);
}

    // now draw object at lastMousePosition

}

document.addEventListener('mousedown', onMouseDown, false);
document.addEventListener('mouseup', onMouseUp, false);
document.addEventListener('mousemove', onMouseMove, false);

---
