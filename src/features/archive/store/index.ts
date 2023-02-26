import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '@/config/store'
import { type Filters } from '../interfaces/Filters'
import { initialState } from './initialState'
import {
  type RemoveBulkFilter,
  type AddBulkFilter,
  type AddFilter,
  type RemoveFilter,
} from './types'

export const archiveStore = createSlice({
  name: 'archive-feature',
  initialState,
  reducers: {
    addBulk: (state, { payload }: AddBulkFilter) => {
      const { id } = payload
      return {
        ...state,
        filters: {
          ...state.filters,
          bulk: [...state.filters.bulk, id],
        },
      }
    },
    removeBulk: (state, { payload }: RemoveBulkFilter) => {
      const { id } = payload
      return {
        ...state,
        filters: {
          ...state.filters,
          bulk: [...state.filters.bulk.filter(item => item !== id)],
        },
      }
    },
    addFilter: (state, { payload }: AddFilter) => {
      const { filter, value } = payload
      return {
        ...state,
        filters: {
          ...state.filters,
          [filter]: value,
        },
      }
    },
    removeFilter: (state, { payload }: RemoveFilter) => {
      const { filter } = payload
      return {
        ...state,
        filters: {
          ...state.filters,
          [filter]: initialState.filters[filter],
        },
      }
    },
    updateFilters: (_, { payload }) => {
      const { newState } = payload
      return newState
    },
    resetFilters: () => initialState,
  },
})

export const {
  addBulk,
  removeBulk,
  addFilter,
  resetFilters,
  removeFilter,
  updateFilters,
} = archiveStore.actions

export const archiveFiltersSlice = (state: RootState): Filters =>
  state.archive.filters

export default archiveStore.reducer
