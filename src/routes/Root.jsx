import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Navbar from "../components/Navbar";
import Layouts from "../layouts/Layouts";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts />,
    children: [{ index: true, element: <Home /> }],
  },
]);
