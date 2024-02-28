import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import {
  increaseItemQuanity,
  decreaseItemQuanity,
  getItemQuantityWithId,
  removeFromCart,
} from "./cartSlice";

type UpdateItemQuantityProps = {
  pizzaId: string;
};

const UpdateItemQuantity = ({ pizzaId }: UpdateItemQuantityProps) => {
  const dispatch = useDispatch();
  const itemQty = useSelector(getItemQuantityWithId(pizzaId));
  const handleIncreaseQuanity = () => {
    dispatch(increaseItemQuanity(pizzaId));
  };
  const handleDecreaseQuanity = () => {
    if (itemQty === 1) {
      dispatch(removeFromCart(pizzaId));
    } else {
      dispatch(decreaseItemQuanity(pizzaId));
    }
  };

  return (
    <div className="flex items-center gap-1 md:gap-3">
      <Button size="small" onClick={handleDecreaseQuanity}>
        -
      </Button>
      <Button onClick={handleIncreaseQuanity} size="small">
        +
      </Button>
    </div>
  );
};

export default UpdateItemQuantity;
