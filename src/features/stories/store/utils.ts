import { type Story } from '../interfaces/Stories'
import type Stories from '../interfaces/Stories'

const matchItemToStory = (item: any, pos: number): Story => ({
  id: `film-${pos}`,
  title: item?.title,
  releaseDate: item?.releaseDate,
  director: item?.director,
  content: item?.content ?? '',
})

export const matchItemsToStories = (items: any[]): Stories => {
  return items.map((item: any, pos: number) => matchItemToStory(item, pos))
}
