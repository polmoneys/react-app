import { useState } from 'react'
import {
  HelveticaNeue,
  AlertSuccess,
  AlertError,
  View,
  Popper,
  ButtonIcon,
  IconQuestion,
  Col,
  Row,
  HelveticaNeueS,
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
    setAlertError('Hydrate yourself :) ')
  }, 4000)

  return (
    <View.Popout>
      <Col as="div">
        <Row as="header" size="100%">
          <Sidenav />

          <Popper
            content={
              <Col
                as="div"
                options={{
                  DANGEROUS: {
                    backgroundColor: 'var(--gray-700)',
                    padding: 'var(--gap-3)',
                    borderRadius: 'var(--border-radius)',
                    border: 'var(--border)',
                    boxShadow: 'var(--shadow)',
                  },
                }}
              >
                <HelveticaNeueS>
                  Demo of interlacing a wild combination of materials into an
                  interface
                </HelveticaNeueS>
              </Col>
            }
            position="left"
          >
            {({ toggle }) => {
              return (
                <ButtonIcon onClick={toggle}>
                  <IconQuestion label="" />
                </ButtonIcon>
              )
            }}
          </Popper>
        </Row>

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
    </View.Popout>
  )
}

export default Landing
