import { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import { HelveticaNeueBold, Breadcrumb, View } from '@/system/components'
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
