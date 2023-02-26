export type Status = 'active' | 'inactive'
export type Agencies =
  | 'JAXA'
  | 'NASA'
  | 'ESA'
  | 'SpaceX'
  | 'Axiom Space'
  | 'Roscosmos'
  | 'All'

export interface Filters {
  bulk: string[]
  agency: Agencies | null
  status: Status
}
