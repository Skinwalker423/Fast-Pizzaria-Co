import { OrderItem } from "../../types";
import Button from "../../ui/Button";

const UpdateOrder = ({ order }: { order: OrderItem }) => {
  console.log("order in update order", order);
  return <Button color="primary">Make Priority</Button>;
};

export default UpdateOrder;
