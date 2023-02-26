import { type Crew } from '../interfaces/Crews'
import type Crews from '../interfaces/Crews'
import { type Launch } from '../interfaces/Launches'

export function matchItemsToCrew(items: any): Crews {
  return items.map((item: any) => matchItemToCrew(item))
}

export const matchItemToCrew = (item: any): Crew => ({
  name: item?.name,
  id: item?.id,
  image: item?.image,
  wiki: item?.wikipedia,
  agency: item?.agency ?? '',
})

export const matchToLaunch = (item: any): Launch => ({
  name: item?.name,
  id: item?.id,
  flightNumber: item?.flight_number,
  date: item?.date_utc ?? '',
  success: item?.success,
})
