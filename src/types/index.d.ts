export interface State {
  nodes: Node[]
  selectedNode: Node
  // assemblies: Assembly[]
  //   products: Product[]
}

export interface Node {
  id: number
  x: number
  y: number
  r: number
}

export interface Assembly {
  id: number
  name: string
  colour: string
  opacity: number
  total: number
  //   items: Item[]
}

export interface Item {
  product: Product
}

export interface Product {}

export interface Layer {}
