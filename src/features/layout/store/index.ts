import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '@/config/store'
import type Settings from '../interfaces/Settings'

const initialState: Settings = {
  settings: {
    zoom: 0,
  },
}

export const settingsStore = createSlice({
  name: 'dashboard',
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

export const settingsSlice = (state: RootState) => state.layout.settings

export default settingsStore.reducer
