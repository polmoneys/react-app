import { type Pager } from './Pager'

export interface Planet {
  id: string
  name: string
  diameter: number
}

export default interface Planets {
  list: Planet[]
  pager: Pager
}
