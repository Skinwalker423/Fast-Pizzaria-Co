import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

const Header = () => {
  return (
    <header className="font-roboto flex items-center justify-between border-b-2 border-stone-200 bg-yellow-500 px-4 py-2 uppercase sm:px-6">
      <Link className="tracking-widest" to={"/"}>
        Fast React Pizza Co
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
};

export default Header;
