import { createBrowserRouter } from "react-router-dom";
import NotFound from "../../ui/pages/NotFound";
import Home from "../../ui/pages/Home";
import Info, { loader as InfoLoader } from "../../ui/pages/Info";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "info/:photoId",
    element: <Info />,
    loader: InfoLoader,
  },
])