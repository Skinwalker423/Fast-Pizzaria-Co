import { getOrder } from "../../services/apiRestaurant";

export async function loader({ params }) {
  console.log("params", params.orderId);
  const order = await getOrder(params.orderId);
  return order;
}
