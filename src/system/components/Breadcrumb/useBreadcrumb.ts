import { useContext, createContext } from 'react'

export const Context = createContext<string>('top-nav-breadcrumb')

const useBreadcrumbContext = (): string => {
  const context = useContext(Context)

  if (context == null) {
    throw new Error('Missing BreadcrumbProvider.')
  }

  return context
}

export default useBreadcrumbContext
