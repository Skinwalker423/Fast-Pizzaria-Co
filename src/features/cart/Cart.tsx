import { useDispatch, useSelector } from "react-redux";

import useUser from "../user/useUser";
import { clearCart, getCart } from "./cartSlice";

import LinkButton from "../../ui/LinkButton";
import Button from "../../ui/Button";
import CartItem from "./CartItem";

function Cart() {
  const cart = useSelector(getCart);
  const { username } = useUser();
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>
      <h2 className="mt-7 text-xl font-semibold">Your cart, {username}</h2>
      <ul className="mt-3 divide-y divide-stone-200 border-b transition-all duration-300">
        {cart.map((item) => {
          return <CartItem key={item.pizzaId} item={item} />;
        })}
      </ul>
      <div className="mt-6 space-x-2">
        <Button disabled={true} to={cart.length ? "/order/new" : "/menu"}>
          {cart.length ? "order" : "browse"} pizzas
        </Button>
        <Button onClick={handleClearCart} color="secondary">
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
