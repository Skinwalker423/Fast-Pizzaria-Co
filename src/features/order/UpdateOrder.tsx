import { useFetcher } from "react-router-dom";
import { OrderItem } from "../../types";
import Button from "../../ui/Button";
import { updateOrder } from "../../services/apiRestaurant";

const UpdateOrder = ({ order }: { order: OrderItem }) => {
  console.log("order in update order", order);
  const fetcher = useFetcher();
  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button color="primary">Make Priority</Button>;
    </fetcher.Form>
  );
};

export default UpdateOrder;

export async function action({ request, params }) {
  console.log(request);
  const data = { priority: true };
  await updateOrder(params.orderId, data);
  return null;
}
