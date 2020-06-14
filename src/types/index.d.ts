export interface State {
  nodes: Node[]
  assemblies: Assembly[]
  //   products: Product[]
}

export interface Node {
  id: number
  cx: number
  cy: number
  r: number
  colour: string
  opacity: number
}

export interface Assembly {
  id: number
  name: string
  colour: string
  opacity: number
  //   items: Item[]
}

export interface Item {
  product: Product
}

export interface Product {}
