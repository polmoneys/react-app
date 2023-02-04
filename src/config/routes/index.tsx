import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Archive from "@/features/archive/pages/archive";
import Stories from "@/features/stories/pages/stories";
import Docs from "@/features/system/pages/system";

import Layout from "@/features/layout/components/Layout";
import ErrorLayout from "@/features/layout/components/LayoutError";

/**
 *  will fail:
 * const { Export1, Export2 } = lazy(() => import('path/to/component'));
 * https://github.com/facebook/react/issues/14603
 * One workaround is to re-export those modules as default exports from an intermediate module.
 */
const importNamed = (componentPath: string) =>
  import(componentPath).then(comp => ({ default: comp.default }));

const Dashboard = lazy(() =>
  importNamed("../../features/dashboard/pages/dashboard")
);

const router = createBrowserRouter([
  {
    path: "/",
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
            path: "archive",
            element: <Archive />,
            // ...
          },
          {
            path: "stories",
            element: <Stories />,
            // ...
          },
          {
            path: "system",
            element: <Docs />,
            // ...
          },
        ],
      },
    ],
  },
]);

export default router;
