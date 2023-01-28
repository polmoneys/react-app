import { RouterProvider } from "react-router-dom";
import router from "@/config/routes";
import "./css/tokens.css";
import "./css/layout.css";
import "./css/system.css";

export default function App() {
  return <RouterProvider router={router} />;
}
