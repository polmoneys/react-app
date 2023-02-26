export interface Launch {
  flightNumber: number
  name: string
  success: boolean
  date: Date
  id: string
}

export default interface Launches extends Array<Launch> {}
