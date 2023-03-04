import { type ReactElement } from 'react'

export type Value = string | number

export type Dictionary<T = Value> = Record<string, T>
export interface Dictionaries extends Array<Dictionary> {}
/*
  export interface Dictionaries<T = Value> {
    [index: number]: Dictionary<T>;
  }
*/

export type ArrayProp = string[] | string

export type RenderProp<TChildrenProps, TElement = any> = (
  props: TChildrenProps,
) => ReactElement<TElement>

/* 
  Usage:
  type One = (x:number) => void
  type Two = AddParams<One, [y:string]>
  vs.
  type TwoOldWay = (x:number, y:string) => void
 */
export type AddParams<
  TFn extends (...args: never[]) => void,
  TParams extends [...args: unknown[]],
> = (...args: [...Parameters<TFn>, ...TParams]) => ReturnType<TFn>

/*
const onClick: OnAction = 'onClick'
const handleClick: OnAction = 'handleClick'; => will fail
 */
export type OnAction = `on${string}`

/*
 type Crud =  addName | addPhone | removeName | removePhone
 */
type CrudActions = 'add' | 'remove'
type CrudProperties = 'name' | 'phone'

export type Crud = `${CrudActions}${Capitalize<CrudProperties>}`
export type CrudLower = `${CrudActions}${Lowercase<CrudProperties>}`

/*
  conditional type, same as:
  export declare function addOrConcat<T extends number>(x: T): number
  export declare function addOrConcat<T extends string>(x: T): string
*/
export declare function addOrConcat<T extends number | string>(
  x: T,
): T extends number ? number : string

/*
  if ('z' in point){}
*/
interface Point {
  x: number
  y: number
}
export interface Point3d extends Point {
  z: number
}
