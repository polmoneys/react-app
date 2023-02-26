import { type Agencies } from './Filters'

export interface Crew {
  agency: Agencies
  name: string
  image: string
  wiki: string
  id: string
}

export default interface Crews extends Array<Crew> {}
