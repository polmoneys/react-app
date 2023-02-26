import type Filters from '../interfaces/Filters'
import type Stories from './types'

export const initialFilters: Filters = {
  sort: {
    id: '',
    direction: 'descending',
  },
  rating: 'all',
  old: false,
  query: '',
}

const initialState: Stories = {
  list: [],
  filters: initialFilters,
}

export default initialState
