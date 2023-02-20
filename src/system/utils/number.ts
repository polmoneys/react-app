import { partial } from './language'

const add = (x: number, y: number): number => x + y
const substract = (x: number, y: number): number => y - x
const multiply = (x: number, y: number): number => x * y

const upOne = partial(add, 1)
const upTen = partial(add, 10)
const downOne = partial(substract, 1)
const upByTen = partial(multiply, 10)

export const calculator = { upOne, downOne, upTen, upByTen }
