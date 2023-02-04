import { ReactElement } from "react";

export type Value = string | number;

export type Dictionary<T = Value> = Record<string, T>;
export interface Dictionaries extends Array<Dictionary> {}

export interface RenderProp<TChildrenProps, TElement = any> {
  (props: TChildrenProps): ReactElement<TElement>;
}

// type One = (x:number) => void
// type Two = AddParams<One, [y:string]>
// type TwoOldWay = (x:number, y:string) => void
export type AddParams<
  TFn extends (...args: never[]) => void,
  TParams extends [...args: unknown[]]
> = (...args: [...Parameters<TFn>, ...TParams]) => ReturnType<TFn>;
