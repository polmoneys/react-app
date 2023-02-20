import { Suspense } from 'react'
import { RouterProvider } from 'react-router-dom'
import router from '@/config/routes'
import { HelveticaNeue } from './system/components/Typography'
import './system/css/tokens.css'
import './system/css/platform.css'
import './system/css/utils.css'
import './system/css/ring.css'
import './app.css'

export default function App(): JSX.Element {
  return (
    <Suspense fallback={<HelveticaNeue>loading router</HelveticaNeue>}>
      <RouterProvider router={router} />
    </Suspense>
  )
}
