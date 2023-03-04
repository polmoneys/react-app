import { useAppDispatch, useAppSelector } from '@/config/store/hooks'
import {
  NavLink,
  Disclosure,
  HelveticaNeue,
  ButtonSuccess,
  Row,
  Col,
  Shape,
  Buttons,
  Button,
  Group,
  HelveticaNeueS,
} from '@/system/components/'
import { BreadcrumbPortal } from '@/system/components/Breadcrumb/index'
import { setMaxZoom, setMidZoom, setMinZoom, settingsSlice } from '../../store'
import styles from './index.module.css'

/*

  import { useLocation } from 'react-router-dom'
  import { DASHBOARD_BASE_URI } from '@/config/routes/paths'

  const location = useLocation()
  const matchesDashboard = location.pathname === `${DASHBOARD_BASE_URI}`

*/

function Topnav(): JSX.Element {
  const dispatch = useAppDispatch()
  const { zoom } = useAppSelector(settingsSlice)

  return (
    <Group as="nav" className={styles.nav}>
      <Disclosure
        popper
        as="div"
        id="test-disclosure"
        label={<Shape.Circle size={24} />}
        options={{
          DANGEROUS: {
            backgroundColor: 'var(--gray-800)',
            padding: 'var(--gap-3)',
          },
        }}
        className="user-settings"
      >
        <Col as="div" gap="var(--gap-3">
          <HelveticaNeueS>Zoom at {zoom}</HelveticaNeueS>
          <Buttons>
            <Button ringless onClick={() => dispatch(setMinZoom())}>
              Min
            </Button>
            <Button ringless onClick={() => dispatch(setMidZoom())}>
              Mid
            </Button>
            <Button ringless onClick={() => dispatch(setMaxZoom())}>
              Max
            </Button>
          </Buttons>
        </Col>
      </Disclosure>
      <NavLink to="/">Home</NavLink>
      <NavLink to="archive">Archive</NavLink>
      <NavLink to="stories">Stories</NavLink>

      <BreadcrumbPortal />
    </Group>
  )
}

export default Topnav
