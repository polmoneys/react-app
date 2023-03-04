import { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import {
  HelveticaNeue,
  HelveticaNeueBold,
  Col,
  View,
  Row,
  ButtonIcon,
  IconHeart,
  IconQuestion,
  Popper,
  Card,
  Couple,
  Breadcrumb,
} from '@/system/components'
import SubnavPatterns from '../components/Subnav/patterns'

const UI = (): JSX.Element => {
  return (
    <Fragment>
      <Breadcrumb to="/patterns">Patterns</Breadcrumb>
      <View.Full>
        <HelveticaNeueBold>Patterns</HelveticaNeueBold>
        <SubnavPatterns />
      </View.Full>
      <Outlet />
    </Fragment>
  )
}

export default UI
