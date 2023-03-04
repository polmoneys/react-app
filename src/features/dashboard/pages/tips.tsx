import { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import { HelveticaNeueBold, Breadcrumb, View } from '@/system/components'
import SubnavNested from '../components/Subnav/nested'

const Tips = (): JSX.Element => {
  return (
    <Fragment>
      <Breadcrumb to="/tips">Tips</Breadcrumb>
      <View.Full>
        <HelveticaNeueBold>Tips</HelveticaNeueBold>
        <SubnavNested />
      </View.Full>
      <Outlet />
    </Fragment>
  )
}

export default Tips
