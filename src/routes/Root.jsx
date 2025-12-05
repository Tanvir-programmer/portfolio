import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Layouts from "../layouts/Layouts";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts />,
    children: [{ index: true, element: <Home /> }],
  },
]);
