import type Archive from './types'

export const initialState: Archive = {
  filters: {
    bulk: [],
    agency: 'All',
    status: 'active',
  },
}
