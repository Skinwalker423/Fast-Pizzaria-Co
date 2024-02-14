import { Outlet } from "react-router-dom";
import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";

const AppLayout = () => {
  return (
    <div>
      <Header />
      <main>
        <h1>Main content</h1>
        <Outlet />
      </main>
      <CartOverview />
    </div>
  );
};

export default AppLayout;
