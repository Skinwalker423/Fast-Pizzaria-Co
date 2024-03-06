import { redirect } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import { OrderItem } from "../../types";
import { store } from "../../app/store";
import { clearCart } from "../cart/cartSlice";

const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData) as {
    id: string;
    status: "preparing" | "delivered" | "en route";
    priority: string;
    priorityPrice: number;
    orderPrice: number;
    estimatedDelivery: Date;
    cart: string;
    phone: string;
    address: string;
    position: string;
  };

  const order: OrderItem = {
    ...data,
    cart: JSON.parse(data["cart"]),
    priority: data["priority"] === "on",
  };

  const errors = {} as any;
  console.log("order", order);

  // phone validation
  if (!isValidPhone(order.phone)) {
    errors.phone = "Need phone number";
  }

  if (Object.keys(errors).length > 0) {
    return errors;
  }

  // if no errors create order
  const newOrder = await createOrder(order);
  store.dispatch(clearCart());
  return redirect(`/order/${newOrder.id}`);
}
