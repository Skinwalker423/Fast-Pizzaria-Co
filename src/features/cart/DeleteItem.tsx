import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { removeFromCart } from "./cartSlice";

type DeleteItemProps = {
  pizzaId: string;
  size?: "small" | "medium" | "large";
};

const DeleteItem = ({ pizzaId, size = "small" }: DeleteItemProps) => {
  const dispatch = useDispatch();
  return (
    <Button
      onClick={() => dispatch(removeFromCart(pizzaId))}
      size={size}
      color="danger"
    >
      Delete
    </Button>
  );
};

export default DeleteItem;
