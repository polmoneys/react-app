import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "@/config/store";
import Settings from "../interfaces/Settings";

const initialState: Settings = {
  settings: {
    zoom: 0,
  },
};

export const settingsSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setMinZoom: state => {
      state.settings.zoom = 0;
    },
    setMidZoom: state => {
      state.settings.zoom = 50;
    },
    setMaxZoom: state => {
      state.settings.zoom = 100;
    },
  },
});

export const { setMaxZoom, setMidZoom, setMinZoom } = settingsSlice.actions;

export const selectSettings = (state: RootState) => state.dashboard.settings;

export default settingsSlice.reducer;
