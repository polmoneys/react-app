import { useContext, createContext, Dispatch, SetStateAction } from 'react'

export const Context = createContext<string>('main')

const useBreadcrumbContext = () => {
  const context = useContext(Context)

  if (!context) {
    throw new Error('Missing BreadcrumbProvider.')
  }

  return context
}

export default useBreadcrumbContext
