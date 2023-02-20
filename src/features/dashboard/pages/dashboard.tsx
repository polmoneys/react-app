import { useState } from 'react'
import { GroteskXL, HelveticaNeue } from '@/system/components/Typography'
import { Timer } from '@/system/utils/timer'
import { AlertSuccess, AlertError } from '@/system/components/Alerts'
import Col from '@/system/components/Col'
import Pre from '@/system/components/Pre'
import Button from '@/system/components/Buttons'

const Dashboard = (): JSX.Element => {
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

  const p = `
  ASCII:

    *****@##*****
    **      **
    **
    **  @$$$ ‰% 
    **            **
    **     
    **********       **
  `
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

      <Button>jhshj l</Button>
      <Pre id="test-pre" label="" pre={p} description="" />
    </Col>
  )
}

export default Dashboard
