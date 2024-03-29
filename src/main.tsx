import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { store } from "./app/store.ts";
import { Provider } from "react-redux";

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
import { action as updateOrderAction } from "./features/order/UpdateOrder.tsx";

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
        action: updateOrderAction,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
