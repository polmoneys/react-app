import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Archive from "@/features/archive/pages/archive";
import Stories from "@/features/stories/pages/stories";
import ErrorLayout from "@/system/components/ErrorLayout";
import Layout from "./layout";
import { importNamed } from "./utils";

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
        ],
      },
    ],
  },
]);

export default router;
