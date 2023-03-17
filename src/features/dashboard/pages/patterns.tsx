import { Fragment } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { HelveticaNeueBold, Col, View, Breadcrumb } from '@/system/components'
import SubnavPatterns from '../components/Subnav/patterns'

const Patterns = (): JSX.Element => {
  return (
    <Fragment>
      <Breadcrumb to="/patterns">Patterns</Breadcrumb>
      <View.Full>
        <HelveticaNeueBold>Patterns</HelveticaNeueBold>
        <SubnavPatterns />
      </View.Full>
      <View.Popout>
        <Col as="div">
          <NavLink to={'gradients'}>CSS gradients ftw</NavLink>
          <NavLink to={'couple'}>
            Couple or how to make 2 elements go along
          </NavLink>
          <NavLink to={'auto'}>Simplify justify content</NavLink>
          <NavLink to={'viz'}>Minimal charts</NavLink>
        </Col>
      </View.Popout>
      <Outlet />
    </Fragment>
  )
}

export default Patterns
