import { Fragment, useRef, useState } from 'react'
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
  Shape,
  Line,
  IconSlash,
} from '@/system/components'
import { Timer } from '@/system/utils/timer'
import Sidenav from '../components/Sidenav'
import { useRect } from '@reach/rect'

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

  const [variant, setVariant] = useState<'curve' | 'line'>('line')

  const refA = useRef<HTMLDivElement | null>(null) // Point A
  const refB = useRef<HTMLDivElement | null>(null) // Point B
  const refC = useRef<HTMLDivElement | null>(null) // Point C

  const maskRef = useRef<HTMLDivElement | null>(null)

  const rect = useRect(maskRef, { observe: true })

  return (
    <Fragment>
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
      <View.Full>
        <ButtonIcon
          onClick={() => {
            setVariant(prev => (prev === 'line' ? 'curve' : 'line'))
          }}
        >
          <IconSlash label="" />
        </ButtonIcon>
        <div ref={maskRef} className="demo-party">
          <div className="ref-1" ref={refA}>
            <Shape.Square fill="var(--color-invalid)" size={100} />
          </div>
          <div className="ref-2" ref={refB}>
            <Shape.Square fill="var(--color-invalid)" size={100} />
          </div>
          <div className="ref-3" ref={refC}>
            <Shape.Square fill="var(--color-invalid)" size={100} />
          </div>
          <Line
            boundary={rect}
            variant={variant}
            round
            refs={[refA, refB, refC]}
            weigth={10}
            fill={'yellow'}
          />
        </div>
      </View.Full>
    </Fragment>
  )
}

export default Landing
