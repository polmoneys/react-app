import { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '@/features/layout/components/Nav'
import styles from './index.module.css'
import { BreadcrumbProvider } from '@/system/components/Breadcrumb'

const Layout = (): JSX.Element => {
  return (
    <Fragment>
      <BreadcrumbProvider id="main">
        <Nav />
        {/* By using <main> we have allowed users to skip the intro. */}
        <main className={styles.main}>
          <Outlet />
        </main>
      </BreadcrumbProvider>
    </Fragment>
  )
}

export default Layout
