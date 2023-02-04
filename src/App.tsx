import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import router from "@/config/routes";
import "./system/css/tokens.css";
import "./system/css/platform.css";
import "./system/css/layout.css";
import "./system/css/spacing.css";
import "./app.css";

export default function App() {
  return (
    <Suspense fallback={<p>loading router</p>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}
