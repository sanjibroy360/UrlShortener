import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import lazyLoad from "./utils/lazyLoad";

const HomePage = lazyLoad(() => import("./pages/HomePage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
