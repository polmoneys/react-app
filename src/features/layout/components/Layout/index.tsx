import { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import Topnav from '@/features/layout/components/Topnav'
import { BreadcrumbProvider } from '@/system/components/Breadcrumb'
import styles from './index.module.css'

const Layout = (): JSX.Element => {
  return (
    <Fragment>
      <BreadcrumbProvider id="main">
        <Topnav />
        {/* By using <main> we have allowed users to skip the intro. */}
        <main className={styles.main}>
          <Outlet />
        </main>
      </BreadcrumbProvider>
    </Fragment>
  )
}

export default Layout
