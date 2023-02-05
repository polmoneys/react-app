import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "@/config/store";
import Archive, { AddFilter, RemoveFilter } from "../interfaces/Archive";

export const initialState: Archive = {
  filters: {
    languages: [],
    countries: [],
    status: "draft",
    from: "01-01-2000",
    to: "01-01-2023",
  },
};

export const archiveStore = createSlice({
  name: "archive",
  initialState,
  reducers: {
    addFilter: (state, { payload }: AddFilter) => {
      const { filter, value } = payload;
      return {
        ...state,
        filters: {
          ...state.filters,
          [filter]: value,
        },
      };
    },
    removeFilter: (state, { payload }: RemoveFilter) => {
      const { filter } = payload;
      return {
        ...state,
        filters: {
          ...state.filters,
          [filter]: initialState[filter],
        },
      };
    },
    updateFilters: (_, { payload }) => {
      const { newState } = payload;
      return newState;
    },
    resetFilters: () => initialState,
  },
});

export const { addFilter, resetFilters, removeFilter, updateFilters } =
  archiveStore.actions;

export const archiveFiltersSlice = (state: RootState) => state.archive.filters;

export default archiveStore.reducer;
