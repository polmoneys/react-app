import { Fragment, type ReactNode, useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import Group from '../Core/Group'
import { NavLink } from '../Link'
import useBreadcrumb, { Context } from './useBreadcrumb'

/*
Insight => When passing a component through a Portal 
it will not replace the children in the node you provide, 
it will append to it. 

Credits => https://jjenzz.com/smarter-dumb-breadcrumb
*/

interface Props {
  children: ReactNode
  id: string
}

const BreadcrumbProvider = (props: Props): JSX.Element => {
  return <Context.Provider value={props.id}>{props.children}</Context.Provider>
}

const BreadcrumbPortal = (): JSX.Element => {
  const id = useBreadcrumb()
  return <ol role="list" id={id} aria-label="Breadcrumb" />
}

interface BreadCrumbProps extends Omit<Props, 'id'> {
  to: string
}

const Breadcrumb = (props: BreadCrumbProps): JSX.Element => {
  const id = useBreadcrumb()
  const [portalNode, setPortalNode] = useState<HTMLElement | null>(null)
  useEffect(() => {
    const node = document?.getElementById(id)
    if (node != null) {
      setPortalNode(node)
    }
  }, [])

  return portalNode != null ? (
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

export { BreadcrumbProvider, BreadcrumbPortal }
export default Breadcrumb
