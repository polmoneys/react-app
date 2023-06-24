/*
  const result = template(
    'Hello {0}! My name is {1}. My favorite color is {2-blue}.',
    'Inès',
    'Anthony'
  );

  Hello Inès! My name is Anthony. My favorite color is blue.
*/

export function template(str: string, ...args: Array<string | number>): string {
  return str.replace(/{(\d+)(?:-(.+))?}/g, (match, key, defaultValue) => {
    const index = Number(key)
    if (Number.isNaN(index)) {
      return match
    }

    if (index < args.length) {
      return args[index].toString()
    }

    return defaultValue !== undefined ? defaultValue : match
  })
}

/*
    https://stackoverflow.com/a/21273362    
    match null or undefined, not falsy
*/
export const not = (input: unknown): boolean => input == null

/*
https://codesandbox.io/s/functional-3-u6npz?file=/src/index.js
https://1loc.dev/function/box-handler/

*/

export const partial =
  (fn: any, ...a: any) =>
  (...b: any) =>
    fn(...a, ...b)

export async function compute(param: number): Promise<number> {
  if (typeof param !== 'number')
    return await new Promise(resolve => {
      resolve(0)
    })
  const res = param + 1
  return await new Promise(resolve => {
    resolve(res)
  })
}

export const ponyfills = (): void => {
  /* eslint-disable */

  if (!String.prototype.includes) {
    String.prototype.includes = function (search, start) {
      'use strict'
      if (typeof start !== 'number') {
        start = 0
      }

      if (start + search.length > this.length) {
        return false
      } else {
        return this.includes(search, start)
      }
    }
  }

  if (!String.prototype.startsWith) {
    String.prototype.startsWith = function (searchString, position) {
      position = position || 0
      return this.substr(position, searchString.length) === searchString
    }
  }
  /* eslint-disable */
}

export type Fn<T = void> = () => T

export type Nullable<T> = T | null | undefined

export function batchInvoke(functions: Nullable<Fn>[]) {
  functions.forEach(fn => fn && fn())
}
