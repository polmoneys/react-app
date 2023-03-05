import {
  ARCHIVE_BASE_URI,
  DASHBOARD_BASE_URI,
  STORIES_BASE_URI,
} from '@/config/routes/paths'
import { useAppDispatch, useAppSelector } from '@/config/store/hooks'
import {
  NavLink,
  Disclosure,
  Col,
  Shape,
  Buttons,
  Button,
  Group,
  HelveticaNeueS,
} from '@/system/components/'
import { BreadcrumbPortal } from '@/system/components/Breadcrumb/index'
import { classes } from '@/system/utils/theme'
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
            <Button
              className={classes(zoom === 0 && 'invalid')}
              onClick={() => dispatch(setMinZoom())}
            >
              Min
            </Button>
            <Button
              className={classes(zoom === 50 && 'invalid')}
              onClick={() => dispatch(setMidZoom())}
            >
              Mid
            </Button>
            <Button
              className={classes(zoom === 100 && 'invalid')}
              onClick={() => dispatch(setMaxZoom())}
            >
              Max
            </Button>
          </Buttons>
        </Col>
      </Disclosure>
      <NavLink to={DASHBOARD_BASE_URI}>Home</NavLink>
      <NavLink to={ARCHIVE_BASE_URI}>Archive</NavLink>
      <NavLink to={STORIES_BASE_URI}>Stories</NavLink>

      <BreadcrumbPortal />
    </Group>
  )
}

export default Topnav
