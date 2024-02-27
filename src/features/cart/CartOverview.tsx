import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { formatCurrency } from "../../utils/helpers";
import { getCartTotalPrice, getTotalCartQuantity } from "./cartSlice";

function CartOverview() {
  const qty = useSelector(getTotalCartQuantity);
  const total = useSelector(getCartTotalPrice);
  const currentTotalPrice = formatCurrency(total);

  if (!qty) return null;

  return (
    <div className="flex items-center justify-between bg-stone-800 p-4 px-4 py-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base">
      <p className="space-x-4 text-stone-300 sm:space-x-6">
        <span>{qty} pizzas</span>
        <span>{currentTotalPrice}</span>
      </p>
      <Link to={"/cart"}>Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
