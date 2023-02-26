import { type PayloadAction } from '@reduxjs/toolkit'
import { type Filters, type Status } from '../interfaces/Filters'

export default interface Archive {
  filters: Filters
}

export type RemoveFilter = PayloadAction<{
  filter: keyof Filters
}>

export type AddFilter = PayloadAction<{
  filter: keyof Filters
  value: string | Status
}>

export type AddBulkFilter = PayloadAction<{
  id: string
}>

export type RemoveBulkFilter = PayloadAction<{
  id: string
}>
