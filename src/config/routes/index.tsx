import { createBrowserRouter } from "react-router-dom";
import Archive from "@/features/archive/pages/archive";
import Dashboard from "@/features/dashboard/pages/dashboard";
import Stories from "@/features/stories/pages/stories";
import ErrorLayout from "@/system/components/ErrorLayout";
import Layout from "./layout";

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
