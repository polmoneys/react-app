import { Outlet } from 'react-router-dom'
import { View } from '@/system/components'
import Subnav from '../components/Subnav'

function Dashboard(): JSX.Element {
  return (
    <View>
      <View.Full>
        <Subnav />
      </View.Full>
      <Outlet />
    </View>
  )
}

export default Dashboard
