import { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import { HelveticaNeueBold, Breadcrumb, View } from '@/system/components'
import SubnavTips from '../components/Subnav/tips'

const Tips = (): JSX.Element => {
  return (
    <Fragment>
      <Breadcrumb to="/tips">Tips</Breadcrumb>
      <View.Full>
        <HelveticaNeueBold>Tips</HelveticaNeueBold>
        <SubnavTips />
      </View.Full>
      <Outlet />
    </Fragment>
  )
}

export default Tips
