import { createBrowserRouter } from 'react-router-dom'
import Layout from '@/features/layout/components/Layout'
import Error from '@/features/layout/components/Error'
import ArchiveLanding from '@/features/archive/pages/landing'
import StoriesLanding from '@/features/stories/pages/landing'
import DashboardLanding from '@/features/dashboard/pages/landing'
import Dashboard from '@/features/dashboard/pages'
import CSS from '@/features/dashboard/pages/css'
import UI from '@/features/dashboard/pages/ui'
import Tip from '@/features/dashboard/components/Tip'
import {
  MealDetail,
  MealIngredients,
  MealMethod,
  Meals,
} from '@/features/dashboard/components/Food'
import { ARCHIVE_BASE_URI, DASHBOARD_BASE_URI, STORIES_BASE_URI } from './paths'

/*

import { lazy } from 'react'
import { importNamed } from './utils'

const Dashboard = lazy(
  async () => await importNamed('../../features/dashboard/pages/landing'),
)

{
  element: (
        <Suspense fallback={<IconSpinner/>}>
          <Dashboard />
        </Suspense>
      )
}

*/

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <Error />,

    children: [
      {
        element: <Dashboard />,

        children: [
          {
            path: DASHBOARD_BASE_URI,
            element: <DashboardLanding />,
          },
          {
            path: 'css',
            element: <CSS />,

            children: [{ path: ':tip', element: <Tip /> }],
          },
          {
            path: 'ui',
            element: <UI />,
          },
          {
            path: 'meals',
            element: <Meals />,

            children: [
              {
                path: ':id',
                element: <MealDetail />,
                children: [
                  {
                    path: 'ingredients',
                    element: <MealIngredients />,
                  },
                  {
                    path: 'method',
                    element: <MealMethod />,
                  },
                ],
              },
            ],
          },
        ],
      },

      {
        path: ARCHIVE_BASE_URI,
        element: <ArchiveLanding />,
      },
      {
        path: STORIES_BASE_URI,
        element: <StoriesLanding />,
      },
    ],
  },
])

export default router
