import { PayloadAction } from "@reduxjs/toolkit";
import { FilterRecords, SearchFilters, Status } from "./Filters";

export default interface Archive extends SearchFilters {}

export type RemoveFilter = PayloadAction<{
  filter: keyof SearchFilters;
}>;

export type AddFilter = PayloadAction<{
  filter: keyof SearchFilters;
  value: FilterRecords | Status;
}>;
