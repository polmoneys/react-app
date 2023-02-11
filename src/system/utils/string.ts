/**
 * Utility to remove (but keep) 'separators' from a string
 *  const string = "Hello_party-people!";
 * [ "Hello", "_", "party", "-", "people!" ]
 */

export function removeSeparators(string: string) {
  return string.split(/([-_])/)
}
