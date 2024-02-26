import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { removeFromCart } from "./cartSlice";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  const dispatch = useDispatch();

  return (
    <li className="py-3 sm:flex sm:justify-between">
      <p className="mb-1 font-medium text-stone-800 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex justify-between sm:gap-6">
        <p className="text-green-700">{formatCurrency(totalPrice)}</p>
        <Button
          onClick={() => dispatch(removeFromCart(pizzaId))}
          size="small"
          color="danger"
        >
          Delete
        </Button>
      </div>
    </li>
  );
}

export default CartItem;
