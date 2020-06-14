import { State, Node, Assembly } from '@/types'

const getRandomInt = (max: number) =>
  Math.floor(Math.random() * Math.floor(max))

let nodes: Node[] = []

for (let i = 0; i < 500; i++) {
  nodes.push({
    id: i,
    cx: getRandomInt(10000),
    cy: getRandomInt(10000),
    r: 50,
    colour: 'green',
    opacity: 0.4,
  })
  nodes.push({
    id: i,
    cx: getRandomInt(10000),
    cy: getRandomInt(10000),
    r: 50,
    colour: 'blue',
    opacity: 0.4,
  })
}

const assemblies: Assembly[] = [
  { id: 100, name: 'Receptacle', colour: 'blue', opacity: 0.4 },
  { id: 200, name: 'Data outlet', colour: 'green', opacity: 0.4 },
]

const state: State = { nodes, assemblies }

export default state
