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
