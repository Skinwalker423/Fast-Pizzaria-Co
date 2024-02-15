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
import { loader as menuLoader } from "./features/menu/loader.ts";
import Order from "./features/order/Order.tsx";
import CreateOrder from "./features/order/CreateOrder.tsx";
import Cart from "./features/cart/Cart.tsx";
import AppLayout from "./ui/AppLayout.tsx";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "menu",
        element: <Menu />,
        loader: menuLoader,
      },
      {
        path: "order/new",
        element: <CreateOrder />,
      },
      {
        path: "order/:orderId",
        element: <Order />,
      },
      {
        path: "cart",
        element: <Cart />,
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
