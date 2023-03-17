export interface DataPoint {
  label: string
  value: number
  date: string
}

export interface DataPoints extends Array<DataPoint> {}
