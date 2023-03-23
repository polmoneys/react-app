export const TIME = {
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

export interface DateTimeFormatOptions {
  locale?: string | string[]
  timeZone?: Intl.DateTimeFormatOptions['timeZone']
  hour12?: Intl.DateTimeFormatOptions['hour12']
  weekday?: Intl.DateTimeFormatOptions['weekday']
  era?: Intl.DateTimeFormatOptions['era']
  year?: Intl.DateTimeFormatOptions['year']
  month?: Intl.DateTimeFormatOptions['month']
  day?: Intl.DateTimeFormatOptions['day']
  hour?: Intl.DateTimeFormatOptions['hour']
  minute?: Intl.DateTimeFormatOptions['minute']
  second?: Intl.DateTimeFormatOptions['second']
  timeZoneName?: Intl.DateTimeFormatOptions['timeZoneName']
}

export function formatDateTime(
  date: Date,
  options: DateTimeFormatOptions = {},
): string {
  const {
    locale = 'en-US',
    timeZone = undefined,
    hour12 = options.timeZoneName !== undefined,
    weekday,
    era,
    year = 'numeric',
    month = 'numeric',
    day = 'numeric',
    hour,
    minute,
    second,
    timeZoneName,
  } = options

  const dateTimeFormat = new Intl.DateTimeFormat(locale, {
    timeZone,
    hour12,
    weekday,
    era,
    year,
    month,
    day,
    ...(hour !== undefined ? { hour } : {}),
    ...(minute !== undefined ? { minute } : {}),
    ...(second !== undefined ? { second } : {}),
    timeZoneName,
  })

  return dateTimeFormat.format(date)
}

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

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
] as const

type MonthName = (typeof MONTHS)[number]

export const monthMgmt = (function () {
  const names: MonthName[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  return {
    name: function (number: number) {
      return names[number]
    },
    number: function (name: MonthName) {
      return names.indexOf(name)
    },
  }
})()
