import { extractDates } from './dates'
import fc from 'fast-check'

describe('extractDates', () => {
  it('should extract dates with default separator "-"', () => {
    const input = 'I was born on 12/25/1990 and I started working on 2020-01-01'
    const expected = ['12-25-1990', '2020-01-01']
    const result = extractDates(input, '-')
    expect(result).toEqual(expected)
  })

  it('should extract dates with separator "."', () => {
    const input = 'I was born on 12.25.1990 and I started working on 2020.01.01'
    const expected = ['12-25-1990', '2020-01-01']
    const result = extractDates(input, '-')
    expect(result).toEqual(expected)
  })

  it('should extract dates with separator "/"', () => {
    const input = 'I was born on 12/25/1990 and I started working on 2020/01/01'
    const expected = ['12-25-1990', '2020-01-01']
    const result = extractDates(input, '-')
    expect(result).toEqual(expected)
  })

  it('should extract dates with mixed separators', () => {
    const input = 'I was born on 12/25/1990 and I started working on 2020.01-01'
    const expected = ['12-25-1990', '2020-01-01']
    const result = extractDates(input, '-')
    expect(result).toEqual(expected)
  })

  // it('should extract dates with single digit month and year', () => {
  //   const input = 'The meeting is on 3/7/23'
  //   const expected = ['03-07-2023']
  //   const result = extractDates(input, '-')
  //   expect(result).toEqual(expected)
  // })

  it('should extract dates with four digit year', () => {
    const input = 'The event is on 12-25-2023'
    const expected = ['12-25-2023']
    const result = extractDates(input, '-')
    expect(result).toEqual(expected)
  })

  it('should not extract invalid dates', () => {
    const input = 'My favorite number is 42 and I have 1000 dollars'
    const expected: any = []
    const result = extractDates(input, '-')
    expect(result).toEqual(expected)
  })
  it('should extract common date patterns from input', () => {
    const input = 'I was born on 12/25/1990 and I started working on 2020-01-01'
    const expected = ['12-25-1990', '2020-01-01']
    const result = extractDates(input)
    expect(result).toEqual(expected)
  })

  it('should extract common date patterns with leading zeros', () => {
    const input = 'I was born on 01/01/1990 and I started working on 01/01/2020'
    const expected = ['01-01-1990', '01-01-2020']
    const result = extractDates(input)
    expect(result).toEqual(expected)
  })

  // it('should extract common date patterns with spaces', () => {
  //   const input = 'I was born on 12 25 1990 and I started working on 01 01 2020'
  //   const expected = ['12-25-1990', '01-01-2020']
  //   const result = extractDates(input)
  //   expect(result).toEqual(expected)
  // })

  it('should extract common date patterns with new lines', () => {
    const input =
      'I was born on\n12/25/1990\nand I started working on\n01/01/2020'
    const expected = ['12-25-1990', '01-01-2020']
    const result = extractDates(input)
    expect(result).toEqual(expected)
  })

  it('should remove duplicate matches', () => {
    const input = 'I was born on 12/25/1990 and started working on 12/25/1990'
    const expected = ['12-25-1990']
    const result = extractDates(input)
    expect(result).toEqual(expected)
  })

  it('should return an empty array for strings without dates', () => {
    fc.assert(
      fc.property(fc.string(), str => {
        const result = extractDates(str)
        return result.length === 0
      }),
    )
  })

  it('should extract valid dates', () => {
    fc.assert(
      fc.property(fc.string(), (input: string) => {
        const dates = extractDates(input, '-')
        const regex = /\b(\d{1,2}[-./]\d{1,2}[-./]\d{2,4})\b/g
        let match
        while ((match = regex.exec(input)) != null) {
          const date = match[1].replace(/[-./]/g, '-')
          expect(dates.includes(date)).toBe(true)
        }
      }),
    )
  })

  it('should return an array with no duplicates', () => {
    fc.assert(
      fc.property(fc.array(fc.string()), (dates: string[]) => {
        const input = dates.join(' ')
        const extractedDates = extractDates(input, '-')
        const uniqueDates = new Set(extractedDates)
        expect(extractedDates).toEqual(Array.from(uniqueDates))
      }),
    )
  })
})
