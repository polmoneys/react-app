import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import ArchiveLanding from '@/features/archive/pages/landing'
import StoriesLanding from '@/features/stories/pages/landing'
import Layout from '@/features/layout/components/Layout'
import ErrorLayout from '@/features/layout/components/LayoutError'
import { importNamed } from './utils'

const Dashboard = lazy(
  async () => await importNamed('../../features/dashboard/pages/dashboard'),
)

export const DASHBOARD_BASE_URI = '/'
export const ARCHIVE_BASE_URI = 'archive'
export const STORIES_BASE_URI = 'stories'

const router = createBrowserRouter([
  {
    path: DASHBOARD_BASE_URI,
    element: <Layout />,
    errorElement: <ErrorLayout />,
    // loader: rootLoader,
    // action: rootAction,
    children: [
      {
        children: [
          {
            index: true,
            element: <Dashboard />,
            // element: (
            //   <Suspense fallback={<p>loadingggg dashboard</p>}>
            //     <NewDash />
            //   </Suspense>
            // ),
            // ...
          },
          {
            path: ARCHIVE_BASE_URI,
            element: <ArchiveLanding />,
            // ...
          },
          {
            path: STORIES_BASE_URI,
            element: <StoriesLanding />,
            // ...
          },
        ],
      },
    ],
  },
])

export default router
