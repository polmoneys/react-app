import { type SortDirection } from './Pager'

export type Rating = 'all' | 'good' | 'bad' | 'excelent' | 'top'

export default interface Filters {
  query: string
  rating: Rating
  old: boolean
  sort: {
    id: string
    direction: SortDirection
  }
}
