import { Outlet } from 'react-router-dom'
import Subnav from '../components/Subnav'
import View from '@/system/components/View'

function Dashboard(): JSX.Element {
  return (
    <View>
      <View.Feature>
        <Subnav />
      </View.Feature>
      <Outlet />
    </View>
  )
}

export default Dashboard
