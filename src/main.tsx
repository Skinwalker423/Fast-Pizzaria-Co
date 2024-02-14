import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import "./index.css";
import Home from "./ui/Home.tsx";
import NotFound from "./ui/Error.tsx";
import Menu from "./features/menu/Menu.tsx";
import Order from "./features/order/Order.tsx";
import CreateOrder from "./features/order/CreateOrder.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
    children: [
      {
        path: "menu",
        element: <Menu />,
      },
      {
        path: "order/new",
        element: <CreateOrder />,
      },
      {
        path: "order/:orderId",
        element: <Order />,
      },
    ],
  },
]);

ReactDOM.createRoot(
  document.getElementById("root")!
).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
