/*
getIndex('A'); // 1
getIndex('B'); // 2
getIndex('C'); // 3
getIndex('Z'); // 26

getIndex('AA'); // 27
getIndex('AB'); // 28
getIndex('AC'); // 29
getIndex('AZ'); // 52

getIndex('AAA'); // 703
getIndex('AAB'); // 704

*/
export const fromIndexToChar = (col: string): number =>
  col.split('').reduce((prev, next) => prev * 26 + parseInt(next, 36) - 9, 0)

/**
 * Utility to remove (but keep) 'separators' from a string
 *  const string = "Hello_party-people!";
 * [ "Hello", "_", "party", "-", "people!" ]
 */

export function removeSeparators(string: string): string[] {
  return string.split(/([-_])/)
}

export const slugify = (str: string): string =>
  str
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')

export const prependNumbers = (str: string): string =>
  str
    .split(/\r?\n/)
    .map((line, i) => `${(i + 1).toString().padStart(2, ' ')} ${line}`)
    .join('\n')
