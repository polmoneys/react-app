import { configureStore } from "@reduxjs/toolkit";
import settingsSlice from "../../features/dashboard/store";
import archiveSlice from "../../features/archive/store";
import storiesSlice from "../../features/stories/store";

export const store = configureStore({
  reducer: {
    dashboard: settingsSlice,
    archive: archiveSlice,
    stories: storiesSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
