/*
    Usage:
    
    interface OrderInfo {
        orderId: number
        items: number
        [key: string]: number
    }
    const uri = 'https://example.com/orders/99/items/22'
    const info = extractInfoFromUri<OrderInfo>(uri, ['orders', 'items'])
    console.log(info) // { orderId: 99, items: 22 }

*/
export function extractInfoFromUri<T extends Record<string, number>>(
  url: string,
  keywords: string[],
): Partial<T> {
  const regex = new RegExp(`\\b(${keywords.join('|')})\\/(\\d+)\\b`, 'gi')

  const matches = url.matchAll(regex)
  const info: Partial<T> = {}

  for (const match of matches) {
    const [_, keyword, value] = match
    if (Object.prototype.hasOwnProperty.call(info, keyword)) {
      continue
    }
    info[keyword as keyof T] = parseInt(value, 10) as T[keyof T]
  }

  return info
}
