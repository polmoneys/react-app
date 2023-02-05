export function isObjectEmpty(object: any) {
  for (const prop in object) {
    if (Object.prototype.hasOwnProperty.call(object, prop)) return false;
  }

  return true;
}

/*
    Usage:
    const author = { name: "Steve", age: 93, height: 241 }

    const onlySteves = filterObject(author, ([k, v]) => v === "Steve") // { name: "Steve" }
    const onlyNumbers = filterObject(author, ([k, v]) => typeof v === "number") // { age: 93, height: 241 }
    const onlyNames = filterObject(author, ([k, v]) => k === "name") // { name: "Steve" }
*/

type Entry<T> = {
  [K in keyof T]: [K, T[K]];
}[keyof T];

export function filterObject<T extends object>(
  obj: T,
  fn: (entry: Entry<T>, i: number, arr: Entry<T>[]) => boolean
) {
  return Object.fromEntries(
    (Object.entries(obj) as Entry<T>[]).filter(fn)
  ) as Partial<T>;
}
