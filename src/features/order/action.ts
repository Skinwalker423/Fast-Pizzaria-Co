import { redirect } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import { OrderItem } from "../../types";

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData) as {
    id: string;
    status: string;
    priority: string;
    priorityPrice: number;
    orderPrice: number;
    estimatedDelivery: Date;
    cart: string;
  };

  const order: OrderItem = {
    ...data,
    cart: JSON.parse(data["cart"]),
    priority: data["priority"] === "on",
  };

  console.log(order);
  const newOrder = await createOrder(order);

  return redirect(`/order/${newOrder.id}`);
}
