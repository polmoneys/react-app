import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import ArchiveLanding from '@/features/archive/pages/landing'
import StoriesLanding from '@/features/stories/pages/landing'
import DocumentationLanding from '@/features/documentation/pages/landing'
import Layout from '@/features/layout/components/Layout'
import ErrorLayout from '@/features/layout/components/LayoutError'
import { importNamed } from './utils'

const Dashboard = lazy(
  async () => await importNamed('../../features/dashboard/pages/dashboard'),
)

const router = createBrowserRouter([
  {
    path: '/',
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
            path: 'archive',
            element: <ArchiveLanding />,
            // ...
          },
          {
            path: 'stories',
            element: <StoriesLanding />,
            // ...
          },
          {
            path: 'docs',
            element: <DocumentationLanding />,
            // ...
          },
        ],
      },
    ],
  },
])

export default router
