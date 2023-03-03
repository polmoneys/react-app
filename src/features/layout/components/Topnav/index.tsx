import { useAppDispatch, useAppSelector } from '@/config/store/hooks'
import { NavLink } from '@/system/components/Link'
import Disclosure from '@/system/components/Core/Disclosure'
import { HelveticaNeue } from '@/system/components/Typography'
import { ButtonSuccess } from '@/system/components/Buttons'
import Row from '@/system/components/Row'
import Col from '@/system/components/Col'
import Shape from '@/system/components/Shape'
import { BreadcrumbPortal } from '@/system/components/Breadcrumb/index'
import { setMaxZoom, settingsSlice } from '../../store'
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
    <nav className={styles.nav}>
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
        <Col as="div">
          <Row as="div" gap="0" options={{ alignItems: 'center' }}>
            <HelveticaNeue>current zoom {zoom}</HelveticaNeue>
            <ButtonSuccess
              className="ml-auto"
              onClick={() => dispatch(setMaxZoom())}
            >
              Max
            </ButtonSuccess>
          </Row>
        </Col>
      </Disclosure>
      <NavLink to="/">Home</NavLink>
      <NavLink to="archive">Archive</NavLink>
      <NavLink to="stories">Stories</NavLink>

      <BreadcrumbPortal />
    </nav>
  )
}

export default Topnav
