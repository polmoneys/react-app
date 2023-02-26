import { type Pager } from '../interfaces/Pager'
import type People from '../interfaces/People'
import { type Character } from '../interfaces/People'
import { type Planet } from '../interfaces/Planets'
import type Planets from '../interfaces/Planets'
import { type Film } from '../interfaces/Films'
import type Films from '../interfaces/Films'

const matchItemToFilm = (item: any, pos: number): Film => ({
  id: `film-${pos}`,
  label: item.title,
  releaseDate: item?.releaseDate,
  director: item?.director,
  episode: item?.episodeID.toString(),
  content: item?.openingCrawl,
})

export const matchItemsToFilms = (items: any[]): Films => {
  return items.map((item: any, pos: number) => matchItemToFilm(item, pos))
}

export const matchToPeople = (item: any): People => ({
  list: item.people.map((char: any) => matchToCharacter(char)),
  pager: matchToPager({
    totalCount: item?.totalCount,
    hasNextPage: item?.pageInfo?.hasNextPage,
    hasPreviousPage: item?.pageInfo?.hasPreviousPage,
    lastNodeId: item?.edges?.node?.id,
  }),
})

export const matchToCharacter = (item: any): Character => ({
  birthYear: item?.birthYear,
  name: item?.name ?? '',
  id: item?.id,
  eyeColor: item?.eyeColor,
  homeWorld: item?.homeworld?.name,
})

export const matchToPlanets = (item: any): Planets => ({
  list: item.planets.map((char: any) => matchToPlanet(char)),
  pager: matchToPager({
    totalCount: item?.totalCount,
    hasNextPage: item?.pageInfo?.hasNextPage,
    hasPreviousPage: item?.pageInfo?.hasPreviousPage,
  }),
})

export const matchToPlanet = (item: any): Planet => ({
  name: item?.name,
  id: item?.id,
  diameter: item?.diameter,
})

export const matchToPager = (item: any): Pager => ({
  totalPages: item?.totalCount,
  hasNextPage: item?.hasNextPage,
  hasPreviousPage: item?.hasPreviousPage,
})
