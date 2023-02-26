import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '@/config/store'
import { initialState } from './initialState'
import { type Settings } from './types'

export const settingsStore = createSlice({
  name: 'layout-feature',
  initialState,
  reducers: {
    setMinZoom: state => {
      state.settings.zoom = 0
    },
    setMidZoom: state => {
      state.settings.zoom = 50
    },
    setMaxZoom: state => {
      state.settings.zoom = 100
    },
  },
})

export const { setMaxZoom, setMidZoom, setMinZoom } = settingsStore.actions

export const settingsSlice = (state: RootState): Settings =>
  state.layout.settings

export default settingsStore.reducer
