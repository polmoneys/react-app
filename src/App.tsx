import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import router from "@/config/routes";
import "./system/css/tokens.css";
import "./system/css/platform.css";
import "./system/css/utils.css";
import "./app.css";

export default function App() {
  return (
    <Suspense fallback={<p>loading router</p>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}
