import { Fragment, useState } from 'react'
import {
  HelveticaNeue,
  AlertSuccess,
  AlertError,
  View,
} from '@/system/components'
import { Timer } from '@/system/utils/timer'
import Sidenav from '../components/Sidenav'

const Landing = (): JSX.Element => {
  const [alert, setAlert] = useState<null | string>(null)
  const [alertError, setAlertError] = useState<null | string>(null)
  // eslint-disable-next-line no-new
  new Timer(() => {
    setAlert("You've been staring page for 2s")
  }, 2000)

  // eslint-disable-next-line no-new
  new Timer(() => {
    setAlertError('Please go hug a tree :) ')
  }, 4000)

  return (
    <Fragment>
      <View.Popout>
        <Sidenav />

        {alert !== null && (
          <AlertSuccess as="div" className="p:md">
            <HelveticaNeue>{alert}</HelveticaNeue>
          </AlertSuccess>
        )}

        {alertError !== null && (
          <AlertError as="div" className="p:md">
            <HelveticaNeue>{alertError}</HelveticaNeue>
          </AlertError>
        )}
      </View.Popout>
    </Fragment>
  )
}

export default Landing
