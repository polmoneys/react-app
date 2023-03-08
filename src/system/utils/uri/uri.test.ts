import fc from 'fast-check'
import { extractInfoFromUri } from './uri'

interface OrderInfo {
  orderId: number
  items: number
  [key: string]: number
}

describe('extractInfoFromUri', () => {
  it('returns empty object when no matches found', () => {
    fc.assert(
      fc.property(fc.string(), url => {
        const info = extractInfoFromUri<OrderInfo>(url, ['orders', 'items'])
        return Object.keys(info).length === 0
      }),
    )
  })

  it('extracts targets', () => {
    fc.assert(
      fc.property(
        fc.webUrl(),
        fc.string(),
        fc.integer({ min: 10 }),
        fc.integer({ min: 10 }),
        fc.context(),
        (url, segment, orderId, items, ctx) => {
          const testUri = `${url
            .replace(',', '')
            .replaceAll('/', '')}/orders/${orderId}/items/${items}`
          ctx.log(testUri)

          const info = extractInfoFromUri<OrderInfo>(testUri, [
            'orders',
            'items',
          ])
          expect(Object.keys(info)).toHaveLength(2)
        },
      ),
      { verbose: true },
    )
  })
})
