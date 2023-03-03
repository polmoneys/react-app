import { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import { HelveticaNeueBold } from '@/system/components/Typography'
import Breadcrumb from '@/system/components/Breadcrumb'
import View from '@/system/components/View'
import SubnavNested from '../components/Subnav/nested'

const CSS = (): JSX.Element => {
  return (
    <Fragment>
      <Breadcrumb to="/css">CSS</Breadcrumb>
      <View.Popout>
        <HelveticaNeueBold>CSS</HelveticaNeueBold>
        <SubnavNested />
      </View.Popout>
      <Outlet />
    </Fragment>
  )
}

export default CSS
