import { Fragment } from 'react'
import { useRouteError } from 'react-router-dom'
import Nav from '@/features/layout/components/Topnav'
import styles from '../Layout/index.module.css'

const ErrorLayout = (): JSX.Element => {
  const error = useRouteError()
  return (
    <Fragment>
      <Nav />
      <main className={styles.main}>
        <h1>
          {(error as any)?.status}
          {(error as any)?.statusText}
        </h1>
        <p>Sorry, an unexpected error has occurred.</p>
      </main>
    </Fragment>
  )
}

export default ErrorLayout
