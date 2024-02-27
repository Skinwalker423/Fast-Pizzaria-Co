import { useDispatch, useSelector } from "react-redux";

import useUser from "../user/useUser";
import { clearCart } from "./cartSlice";
import { RootState } from "../../app/store";

import LinkButton from "../../ui/LinkButton";
import Button from "../../ui/Button";
import CartItem from "./CartItem";

function Cart() {
  const cart = useSelector((state: RootState) => state.cart.cart);
  const { username } = useUser();
  const dispatch = useDispatch();

  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>
      <h2 className="mt-7 text-xl font-semibold">Your cart, {username}</h2>
      <ul className="mt-3 divide-y divide-stone-200 border-b">
        {cart.map((item) => {
          return <CartItem key={item.pizzaId} item={item} />;
        })}
      </ul>
      <div className="mt-6 space-x-2">
        <Button to="/order/new">Order pizzas</Button>
        <Button onClick={() => dispatch(clearCart())} color="secondary">
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
