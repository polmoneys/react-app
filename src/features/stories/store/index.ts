import {
  createSlice,
  // nanoid
} from '@reduxjs/toolkit'
import type { RootState } from '@/config/store'
import initialState, { initialFilters } from './initialState'
import { type AddFilter, type RemoveFilter } from './types'
import type Story from '../interfaces/Films'
import type Filters from '../interfaces/Filters'

export const storiesStore = createSlice({
  name: 'stories-feature',
  initialState,
  reducers: {
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
          [filter]: initialFilters[filter],
        },
      }
    },
    updateFilters: (state, { payload }) => {
      const { newState } = payload
      return { ...state, filters: newState }
    },
    resetFilters: state => ({ ...state, filters: initialFilters }),
  },
})

export const { addFilter, resetFilters, removeFilter, updateFilters } =
  storiesStore.actions

export const storiesListSlice = (state: RootState): Story[] =>
  state.stories.list
export const storiesFiltersSlice = (state: RootState): Filters =>
  state.stories.filters

export default storiesStore.reducer
