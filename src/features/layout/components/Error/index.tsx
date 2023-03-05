import { Fragment } from 'react'
import { useRouteError } from 'react-router-dom'
import Nav from '@/features/layout/components/Topnav'
import {
  Col,
  Grotesk,
  GroteskXL,
  HelveticaNeue,
  View,
} from '@/system/components'
import styles from '../Layout/index.module.css'

const ErrorLayout = (): JSX.Element => {
  const error = useRouteError()
  return (
    <View>
      <View.Full>
        <Nav />
      </View.Full>
      <View.Popout>
        <main>
          <GroteskXL> {(error as any)?.status}</GroteskXL>
          <Grotesk> {(error as any)?.statusText}</Grotesk>
          <HelveticaNeue>
            Sorry, an unexpected error has occurred.
          </HelveticaNeue>
        </main>
      </View.Popout>
    </View>
  )
}

export default ErrorLayout
