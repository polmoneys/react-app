export const TimeConstants = {
  MillisecondsInOneDay: 86400000,
  MillisecondsIn1Sec: 1000,
  MillisecondsIn1Min: 60000,
  MillisecondsIn30Mins: 1800000,
  MillisecondsIn1Hour: 3600000,
  MinutesInOneDay: 1440,
  MinutesInOneHour: 60,
  DaysInOneWeek: 7,
  MonthInOneYear: 12,
  HoursInOneDay: 24,
}

/**
 * Utility to format a Date according to a locale
 */

export const formatDate = (date: Date, locale = 'es-ES'): string =>
  new Intl.DateTimeFormat(locale).format(new Date(date))

/**
 * Format a date object to a localized time string using the browser's default locale
 * @param date - Input date to format
 * @param showSeconds - Whether to show seconds in the formatted string
 * @param useHour12 - Whether to use 12-hour time
 */
export const formatTimeString = (
  date: Date,
  showSeconds = false,
  useHour12 = false,
): string =>
  date.toLocaleTimeString([], {
    hour: 'numeric',
    minute: '2-digit',
    second: showSeconds ? '2-digit' : undefined,
    hour12: useHour12,
  })

export const yesterday = (): string => {
  const t = new Date()
  t.setDate(t.getDate() - 1)
  // YYYY-MM-DD
  return t.toISOString().split('T')[0]
}

/*
    const rtf = new Intl.RelativeTimeFormat('en', {
        numeric:'auto'
    })
    rtf.format(-1,'day') // yesterday 
    rtf.format(-3,'day') // 3 days ago 
    rtf.format(2,'hour') // in 2 hours 
 */
