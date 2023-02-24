import { useState } from 'react'
import { GroteskXL, HelveticaNeue } from '@/system/components/Typography'
import { Timer } from '@/system/utils/timer'
import { AlertSuccess, AlertError } from '@/system/components/Alerts'
import Col from '@/system/components/Col'

const Dashboard = (): JSX.Element => {
  const [alert, setAlert] = useState<null | string>(null)
  const [alertError, setAlertError] = useState<null | string>(null)

  // // eslint-disable-next-line no-new
  // new Timer(() => {
  //   setAlert("You've been staring page for 2s")
  // }, 2000)

  // // eslint-disable-next-line no-new
  // new Timer(() => {
  //   setAlertError('Please go hug a tree :) ')
  // }, 4000)

  return (
    <Col as="article" gap="var(--gap-3)">
      <GroteskXL>Hello, friend. </GroteskXL>
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
    </Col>
  )
}

export default Dashboard
