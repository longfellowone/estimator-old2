const getRandomInt = max => Math.floor(Math.random() * Math.floor(max))

let nodes = []

for (let i = 0; i < 500; i++) {
  nodes.push({
    id: i,
    x: getRandomInt(10000),
    y: getRandomInt(10000),
    r: 30,
  })
}

const assemblies = [
  { id: 100, name: 'Receptacle', colour: 'blue', opacity: 0.4 },
  { id: 200, name: 'Data outlet', colour: 'green', opacity: 0.4 },
]

const state = { nodes, assemblies, count: 0 }

export default state
