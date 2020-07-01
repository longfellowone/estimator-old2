import { State, Node } from '../types'

export default {
  createNode(state: State, node: Node) {
    console.log(node)
    state.nodes.push(node)
  },
  startDragNode(state: State, id: number) {
    state.selectedNode = state.nodes[id]
    // state.nodes[id].dragging = true
    // state.nodes[id].x = 1000
    // state.nodes[id].y = 1000
    // console.log(state.nodes[id])
    // console.log(id)
  },
  draggingNode(state: State, { x, y }: Node) {
    console.log('moveing')
    state.nodes[state.selectedNode.id].x = x
    state.nodes[state.selectedNode.id].y = y
    // console.log('dragging', id)
  },
  endDragNode(state: State) {
    state.selectedNode = { id: 0, x: 0, y: 0, r: 0 }
    // state.nodes.push({ ...state.selectedNode, x, y, dragging: false })
    // state.nodes[id].x = 1000
    // state.nodes[id].y = 1000
    // console.log(state.nodes[id])
    // console.log(id)
  },
}
