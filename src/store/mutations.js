export default {
  createNode(state, node) {
    console.log(node)
    state.nodes.push(node)
  },
  startDragNode(state, id) {
    state.selectedNode = state.nodes[id]
    state.nodes[id].dragging = true
    // state.nodes[id].x = 1000
    // state.nodes[id].y = 1000
    // console.log(state.nodes[id])
    // console.log(id)
  },
  endDragNode(state, { x, y }) {
    console.log('end')
    console.log(state.selectedNode)
    state.nodes.push({ ...state.selectedNode, x, y, dragging: false })
    // state.nodes[id].x = 1000
    // state.nodes[id].y = 1000
    // console.log(state.nodes[id])
    // console.log(id)
  },
}
