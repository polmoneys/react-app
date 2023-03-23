import { partial } from './language'

/*
  Usage:
  const value = 1234.567;
  const formattedValue = formatNumber(value, {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2,
  });
  console.log(formattedValue); // "€1,234.57"
*/
export interface NumberFormatOptions {
  locale?: string | string[]
  style?: Intl.NumberFormatOptions['style']
  currency?: Intl.NumberFormatOptions['currency']
  currencyDisplay?: Intl.NumberFormatOptions['currencyDisplay']
  useGrouping?: Intl.NumberFormatOptions['useGrouping']
  minimumIntegerDigits?: Intl.NumberFormatOptions['minimumIntegerDigits']
  minimumFractionDigits?: Intl.NumberFormatOptions['minimumFractionDigits']
  maximumFractionDigits?: Intl.NumberFormatOptions['maximumFractionDigits']
  minimumSignificantDigits?: Intl.NumberFormatOptions['minimumSignificantDigits']
  maximumSignificantDigits?: Intl.NumberFormatOptions['maximumSignificantDigits']
}

export function formatNumber(
  value: number,
  options: NumberFormatOptions = {},
): string {
  const {
    locale = 'en-US',
    style = 'decimal',
    currency = 'USD',
    currencyDisplay = 'symbol',
    useGrouping = true,
    minimumIntegerDigits = 1,
    minimumFractionDigits = 0,
    maximumFractionDigits = 3,
    minimumSignificantDigits,
    maximumSignificantDigits,
  } = options

  const numberFormat = new Intl.NumberFormat(locale, {
    style,
    currency,
    currencyDisplay,
    useGrouping,
    minimumIntegerDigits,
    minimumFractionDigits,
    maximumFractionDigits,
    minimumSignificantDigits,
    maximumSignificantDigits,
  })

  return numberFormat.format(value)
}

const add = (x: number, y: number): number => x + y
const substract = (x: number, y: number): number => y - x
const multiply = (x: number, y: number): number => x * y

const upOne = partial(add, 1)
const downOne = partial(substract, 1)
const upTen = partial(add, 10)
const upByTen = partial(multiply, 10)

export const calculator = { upOne, downOne, upTen, upByTen }

// Object.freeze(counter)
let count = 0
export const counter = {
  increment() {
    return ++count
  },
  decrement() {
    return --count
  },
}
