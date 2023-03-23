import fc from 'fast-check'
import { formatDateTime, type DateTimeFormatOptions } from './date'

describe('formatDateTime', () => {
  it('should format dates according to the provided options', () => {
    const date = new Date(2023, 2, 17) // March 17, 2023
    const options: DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }
    const result = formatDateTime(date, options)
    expect(result).toEqual('March 17, 2023')
  })

  it('should format dates correctly with timeZone and timeZoneName', () => {
    fc.assert(
      fc.property(
        fc.date({ min: new Date(2000, 0, 1), max: new Date(2040, 11, 31) }),
        fc.oneof(fc.constant('short'), fc.constant('long')),
        (date, timeZoneName: any) => {
          const options: DateTimeFormatOptions = {
            timeZone: 'America/New_York',
            timeZoneName,
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
          }
          const result = formatDateTime(date, options)
          const formattedDate = new Intl.DateTimeFormat(
            'en-US',
            options,
          ).format(date)

          expect(result).toEqual(formattedDate)
        },
      ),
    )
  })

  it('should format dates consistently with random timeZone and timeZoneName', () => {
    fc.assert(
      fc.property(
        fc.date({ min: new Date(2000, 0, 1), max: new Date(2040, 11, 31) }),
        fc.oneof(fc.constant('short'), fc.constant('long')),
        (date, timeZoneName: any) => {
          const options: DateTimeFormatOptions = {
            timeZone: 'UTC',
            timeZoneName,
          }
          const result = formatDateTime(date, options)
          const formattedDate = new Intl.DateTimeFormat('en-US', {
            timeZone: 'UTC',
            timeZoneName,
          }).format(date)

          expect(result).toEqual(formattedDate)
        },
      ),
    )
  })
})
