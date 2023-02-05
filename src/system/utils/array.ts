export const isArr = (x: unknown) => Array.isArray(x);

export const compactArray = (x: Array<any>) =>
  x.filter(item => item !== null && item !== undefined);

export const unwrapArray = (x: unknown) => (Array.isArray(x) ? x[0] : x);

/**
 * Utility to split an array by a condition ()=>
 */
export const arraySplit = <T>(
  items: T[],
  fn: (el: T) => boolean
): [T[], T[]] => {
  let match = [] as T[];
  let dispose = [] as T[];
  for (const el of items) {
    if (fn(el) === true) {
      match.push(el);
    } else {
      dispose.push(el);
    }
  }
  return [match, dispose];
};
