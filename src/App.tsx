import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import router from "@/config/routes";
import "./css/tokens.css";
import "./css/layout.css";
import "./css/system.css";

export default function App() {
  return (
    <Suspense fallback={<p>loading router</p>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}
