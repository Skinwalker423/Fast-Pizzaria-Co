import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

const Header = () => {
  return (
    <header className="border-b-2 border-stone-200 bg-yellow-500 px-4 py-4 uppercase">
      <Link className="tracking-widest" to={"/"}>
        Fast React Pizza Co
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
};

export default Header;
