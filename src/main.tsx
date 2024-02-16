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
import { loader as orderLoader } from "./features/order/loader.ts";
import Order from "./features/order/Order.tsx";
import CreateOrder from "./features/order/CreateOrder.tsx";
import Cart from "./features/cart/Cart.tsx";
import AppLayout from "./ui/AppLayout.tsx";
import { action as createOrderAction } from "./features/order/action.ts";

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
        errorElement: <NotFound />,
      },
      {
        path: "order/new",
        element: <CreateOrder />,
        action: createOrderAction,
      },
      {
        path: "order/:orderId",
        element: <Order />,
        loader: orderLoader,
        errorElement: <NotFound />,
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
