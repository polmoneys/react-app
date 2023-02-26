import { type PayloadAction } from '@reduxjs/toolkit'
import type Filters from '../interfaces/Filters'
import { type Rating } from '../interfaces/Filters'
import type Story from '../interfaces/Films'
import { type Sorter } from '../interfaces/Pager'

export default interface Stories {
  list: Story[]
  filters: Filters
}

export type RemoveFilter = PayloadAction<{
  filter: keyof Filters
}>

export type AddFilter = PayloadAction<{
  filter: keyof Filters
  value: string | boolean | Rating | Sorter
}>
