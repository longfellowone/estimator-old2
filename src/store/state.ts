import { Node, State } from '../types'

const getRandomInt = (max: number) =>
  Math.floor(Math.random() * Math.floor(max))

let nodes: Node[] = []

for (let i = 0; i < 2000; i++) {
  nodes.push({
    id: i,
    x: getRandomInt(10000),
    y: getRandomInt(10000),
    r: 30,
  })
}

// const assemblies = [
//   { id: 100, name: 'Receptacle', colour: 'blue', opacity: 0.4 },
//   { id: 200, name: 'Data outlet', colour: 'green', opacity: 0.4 },
// ]

const state: State = { nodes, selectedNode: { id: 0, x: 0, y: 0, r: 0 } }

export default state
