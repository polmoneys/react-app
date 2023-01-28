export type FilterRecord = Record<string, string>;
export type FilterRecords = Array<FilterRecord>;
export type Status = "draft" | "validating" | "published";

export interface SearchFilters {
  filters: {
    languages: FilterRecords;
    countries: FilterRecords;
    status: Status;
    from: string;
    to: string;
  };
}
