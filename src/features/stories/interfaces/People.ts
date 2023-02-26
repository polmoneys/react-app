import { type Pager } from './Pager'

export interface Character {
  birthYear: string
  name: string
  id: string
  eyeColor: string
  homeWorld: string
}

export default interface People {
  list: Character[]
  pager: Pager
}
