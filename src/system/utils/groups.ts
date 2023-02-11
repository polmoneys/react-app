export function generateGroups<T extends Record<string, unknown>>(
  input: T,
  count = 3,
): unknown[] {
  //   [ [] * count ]
  const groups = [...Array(count)].map(() => [])
  // assign input to group
  return groups
}
