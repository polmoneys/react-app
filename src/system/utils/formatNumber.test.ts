import fc from 'fast-check'
import { formatNumber, type NumberFormatOptions } from './number'

describe('formatNumber', () => {
  it('should format numbers according to the provided options', () => {
    const value = 1234.567
    const options: NumberFormatOptions = {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }
    const result = formatNumber(value, options)
    expect(result).toEqual('€1,234.57')
  })

  it('should format numbers correctly with useGrouping set to true and false', () => {
    const value = 1234567.89

    const withGrouping = formatNumber(value, { useGrouping: true })
    expect(withGrouping).toEqual('1,234,567.89')

    const withoutGrouping = formatNumber(value, { useGrouping: false })
    expect(withoutGrouping).toEqual('1234567.89')
  })

  it('should format numbers consistently with random options', () => {
    fc.assert(
      fc.property(fc.float(), fc.boolean(), (value, useGrouping) => {
        const options: NumberFormatOptions = { useGrouping }
        const result = formatNumber(value, options)
        const formattedValue = new Intl.NumberFormat('en-US', {
          useGrouping,
        }).format(value)

        expect(result).toEqual(formattedValue)
      }),
    )
  })
})
