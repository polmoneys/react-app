import { configureStore } from '@reduxjs/toolkit'
import settingsStore from '@/features/layout/store'
import archiveStore from '@/features/archive/store'
import storiesStore from '@/features/stories/store'

export const store = configureStore({
  reducer: {
    layout: settingsStore,
    archive: archiveStore,
    stories: storiesStore,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
