import { useLocation } from 'react-router-dom'
import { DASHBOARD_BASE_URI } from '@/config/routes'
import { useAppDispatch, useAppSelector } from '@/config/store/hooks'
import { NavLink } from '@/system/components/Link'
import Disclosure from '@/system/components/Core/Disclosure'
import { HelveticaNeue } from '@/system/components/Typography'
import { ButtonSuccess } from '@/system/components/Buttons'
import Row from '@/system/components/Row'
import Col from '@/system/components/Col'
import { setMaxZoom, settingsSlice } from '../../store'
import styles from './index.module.css'
import { BreadcrumbPortal } from '@/system/components/Breadcrumb/index'

function Nav(): JSX.Element {
  const location = useLocation()
  const matchesDashboard = location.pathname === `${DASHBOARD_BASE_URI}`
  const dispatch = useAppDispatch()
  const { zoom } = useAppSelector(settingsSlice)

  return (
    <nav className={styles.nav}>
      <NavLink to="/">Hi.</NavLink>
      <NavLink to="archive">Archive</NavLink>
      <NavLink to="stories" className="mr-auto">
        Stories
      </NavLink>
      <BreadcrumbPortal />

      {matchesDashboard && (
        <Disclosure
          popper
          as="div"
          id="test-disclosure"
          label={<HelveticaNeue as="span"> Filters</HelveticaNeue>}
          options={{
            DANGEROUS: {
              backgroundColor: 'var(--gray-800)',
              padding: 'var(--gap-3)',
            },
          }}
          className="settings"
        >
          <Col as="div">
            <NavLink to="/">
              <svg
                width="44"
                height="50"
                viewBox="0 0 108 126"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="M41.514 23.187L41.38 44.33l-7.002-11.4-7.004-11.404-12.164-.134L3 21.302v83.493h24.24l.09-21.725.135-21.772 7.092 11.581 7.047 11.627v39.143h24.24V84.191l7.093-11.537 7.047-11.536.135 21.86.09 21.817H104V21.302H79.984l-6.958 11.447L66.07 44.15l-.135-21.097L65.845 2h-24.24l-.09 21.187z"
                ></path>
              </svg>
            </NavLink>
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
      )}
    </nav>
  )
}

export default Nav
