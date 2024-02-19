import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import Loader from "./Loader";

const AppLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="grid h-screen w-full grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}
      <Header />
      <div className="flex justify-center overflow-scroll">
        <main className="mx-auto max-w-6xl ">
          <Outlet />
        </main>
      </div>
      <CartOverview />
    </div>
  );
};

export default AppLayout;
