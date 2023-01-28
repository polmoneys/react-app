import { RouterProvider } from "react-router-dom";
import router from "@/config/routes";
import "./css/reset.css";
import "./css/index.css";

export default function App() {
  return <RouterProvider router={router} />;
}
