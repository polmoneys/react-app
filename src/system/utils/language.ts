/*
    https://stackoverflow.com/a/21273362    
    will only match null or undefined, this won't match false
*/
export const not = (input: unknown): boolean => input == null

export const partial =
  (fn: any, ...a: any) =>
  (...b: any) =>
    fn(...a, ...b)

/*

https://codesandbox.io/s/functional-3-u6npz?file=/src/index.js
https://1loc.dev/function/box-handler/

*/

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
