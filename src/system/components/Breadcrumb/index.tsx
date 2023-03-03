import { Fragment, ReactNode, useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { NavLink } from '../Link'
import useBreadcrumb, { Context } from './useBreadcrumb'

/*
When passing a component through a Portal 
it will not replace the children in the node you provide, 
it will append to it. 

https://codesandbox.io/s/3-a-smarter-dumb-breadcrumb-lp976?from-embed=&file=/src/Breadcrumb.js

*/

interface Props {
  children: ReactNode
  id: string
}

const BreadcrumbPortal = () => {
  const id = useBreadcrumb()
  return (
    <nav aria-label="Breadcrumb">
      <ol id={id} />
    </nav>
  )
}

const BreadcrumbProvider = (props: Props) => {
  return <Context.Provider value={props.id}>{props.children}</Context.Provider>
}

interface BreadCrumbProps extends Omit<Props, 'id'> {
  to: string
}
const Breadcrumb = (props: BreadCrumbProps) => {
  const id = useBreadcrumb()
  const [portalNode, setPortalNode] = useState<any>(null)
  useEffect(() => {
    const node = document?.getElementById(id)
    if (node) {
      setPortalNode(node)
    }
  }, [])

  return portalNode ? (
    ReactDOM.createPortal(
      <li>
        <NavLink to={props.to}>{props.children}</NavLink>
      </li>,
      portalNode,
    )
  ) : (
    <Fragment />
  )
}

export { BreadcrumbProvider, BreadcrumbPortal, Breadcrumb }
