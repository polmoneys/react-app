export type Film = Record<
  'id' | 'label' | 'releaseDate' | 'director' | 'content' | 'episode',
  string
>
export default interface Films extends Array<Film> {}
