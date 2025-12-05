import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "../src/index.css";

import { RouterProvider } from "react-router/dom";
import { router } from "./routes/Root";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(<RouterProvider router={router} />);
