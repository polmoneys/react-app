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
  const data: Item[] = [
    { type: 'food', name: 'Pizza' },
    { type: 'drink', name: 'Coffee' },
    { type: 'food', name: 'Hot Dog' },
  ];
  const { food, drink } = group(data, (item) => item.type);
*/
export const group = <T, P extends keyof T>(
  items: T[],
  fn: (item: T) => T[P],
): Record<string, T[]> => {
  return items.reduce<Record<string, T[]>>((prev, next) => {
    const prop = fn(next) as unknown as string
    return {
      ...prev,
      [prop]: prev[prop] !== undefined ? [...prev[prop], next] : [next],
    }
  }, {})
}

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

export const uniqueArray = <T>(
  current: readonly T[],
  incoming: T | T[],
): T[] => {
  return Array.isArray(incoming)
    ? [...new Set([...current, ...incoming])]
    : [...new Set([...current, incoming])]
}

export function sample<T>(arr: T[], quantity: number): T[] {
  return Array.from(
    { length: quantity },
    _ => arr[Math.round(Math.random() * (arr.length - 1))],
  )
}
