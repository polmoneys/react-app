import {
  createContext,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
  useContext,
  useState,
} from 'react'

/*
  Usage:

   <BasketProvider>
        {console.log("i won't log when basket changes")}
        <div>
          <h2>Deeply nested thing</h2>
          <AddToBasket itemId={"1"} />
          <AddToBasket itemId={"2"} />
          <AddToBasket itemId={"3"} />
        </div>

        <Basket />
    </BasketProvider>
*/
interface BasketProviderProps {
  children: ReactNode
}

interface AddToBasketProps {
  itemId: string
}

type BasketContextType = [string[], Dispatch<SetStateAction<string[]>>]

const Context = createContext<BasketContextType>([[], () => ({})])

const BasketProvider = (props: BasketProviderProps): JSX.Element => {
  const basket = useState<string[]>([])
  return <Context.Provider value={basket}>{props.children}</Context.Provider>
}

const AddToBasket = (props: AddToBasketProps): JSX.Element => {
  const [, setBasket] = useContext(Context)

  function onBasket(): void {
    setBasket(prevBasket => {
      return prevBasket.includes(props.itemId)
        ? prevBasket
        : [...prevBasket, props.itemId]
    })
  }

  return <button onClick={onBasket}>Add {props.itemId} to basket</button>
}

const Basket = (): JSX.Element => {
  const [basket] = useContext(Context)
  return (
    <ul>
      {basket.map(itemId => (
        <li key={itemId}>{itemId}</li>
      ))}
    </ul>
  )
}

export { BasketProvider, AddToBasket, Basket }
