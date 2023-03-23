export type Film = Record<
  'id' | 'label' | 'title' | 'releaseDate' | 'director' | 'content' | 'episode',
  string
>
export default interface Films extends Array<Film> {}
