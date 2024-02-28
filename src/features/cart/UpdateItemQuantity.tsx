import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import {
  increaseItemQuanity,
  decreaseItemQuanity,
  getItemQuantityWithId,
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
    dispatch(decreaseItemQuanity(pizzaId));
  };

  return (
    <div className="flex items-center gap-1 md:gap-3">
      <Button size="medium" onClick={handleDecreaseQuanity}>
        -
      </Button>
      <span className="text-sm font-medium text-stone-800">{itemQty}</span>
      <Button onClick={handleIncreaseQuanity} size="medium">
        +
      </Button>
    </div>
  );
};

export default UpdateItemQuantity;
