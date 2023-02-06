export type FilterRecord = Record<string, string>;
export type FilterRecords = Array<FilterRecord>;
export type Status = "draft" | "validating" | "published";

export interface SearchFilters {
  filters: {
    favorites: boolean;
    status: Status;
    from: string;
    to: string;
  };
}
