import { type ArrayProp } from '../interfaces'

export const isArr = (x: unknown): boolean => Array.isArray(x)

export const compactArray = (x: unknown[]): unknown[] =>
  x.filter(item => item !== null && item !== undefined)

export function unwrapArray<T>(x: unknown): T {
  return Array.isArray(x) ? x[0] : x
}

export function toArray(value: ArrayProp): string[] {
  return Array.isArray(value) ? value : [value]
}

/*

  const [activeSorter, setActiveSorter] = useState<{
      property: keyof ListItem;
      isDescending: boolean;
  }>({
      property: 'id',
      isDescending: false,
  });

  [].sort((widgetA, widgetB) => genericSort<any>(widgetA, widgetB, activeSorter));

*/

export interface Sorter<T> {
  property: Extract<keyof T, string | number | Date>
  isDescending: boolean
}

export function genericSort<T>(objectA: T, objectB: T, sorter: Sorter<T>): any {
  const result = (): number => {
    if (objectA[sorter.property] > objectB[sorter.property]) {
      return 1
    } else if (objectA[sorter.property] < objectB[sorter.property]) {
      return -1
    } else {
      return 0
    }
  }

  return sorter.isDescending ? result() * -1 : result()
}

export const nest = (
  items: Array<Record<string, any>>,
  id: number | null = null,
  link = 'parent_id',
): Array<Record<string, any>> =>
  items
    .filter(item => item[link] === id)
    .map(item => ({ ...item, children: nest(items, item.id, link) }))

export function generateGroups<T extends Record<string, unknown>>(
  input: T,
  count = 3,
): unknown[] {
  //   [ [] * count ]
  const groups = [...Array(count)].map(() => [])
  // assign input to group
  return groups
}

/**
 * Utility to split an array by a condition ()=>
 */
export const splitArray = <T>(
  items: T[],
  fn: (el: T) => boolean,
): [T[], T[]] => {
  const match = [] as T[]
  const dispose = [] as T[]
  for (const el of items) {
    if (fn(el)) {
      match.push(el)
    } else {
      dispose.push(el)
    }
  }
  return [match, dispose]
}
