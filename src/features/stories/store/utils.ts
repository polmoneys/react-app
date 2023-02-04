import Stories, { Story } from "../interfaces/Stories";

const matchItemToStory = (item: any, pos: number): Story => ({
  id: `film-${pos}`,
  title: item?.title,
  releaseDate: item?.releaseDate,
  director: item?.director,
});

export const matchItemsToStories = (items: Array<any>): Stories => {
  return items.map((item: any, pos: number) => matchItemToStory(item, pos));
};
