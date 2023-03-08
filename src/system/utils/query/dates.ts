export function extractDates(input: string, separator = '-'): string[] {
  const dateRegex =
    /\b(\d{1,2}[-./]\d{1,2}[-./]\d{2,4}|\d{4}[-./]\d{2}[-./]\d{2})\b/g

  const dates = new Set<string>()
  let match: RegExpExecArray | null

  while ((match = dateRegex.exec(input)) !== null) {
    const date = match[1].replace(/[-./]/g, separator)
    dates.add(date)
  }
  return Array.from(dates)
}
