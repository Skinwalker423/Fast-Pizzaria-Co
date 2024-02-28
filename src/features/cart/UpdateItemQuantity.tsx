import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { increaseItemQuanity, decreaseItemQuanity } from "./cartSlice";

type UpdateItemQuantityProps = {
  pizzaId: string;
};

const UpdateItemQuantity = ({ pizzaId }: UpdateItemQuantityProps) => {
  const dispatch = useDispatch();

  const handleIncreaseQuanity = () => {
    dispatch(increaseItemQuanity(pizzaId));
  };

  return (
    <div className="flex items-center gap-1 md:gap-3">
      <Button size="small" onClick={handleIncreaseQuanity}>
        -
      </Button>
      <Button size="small">+</Button>
    </div>
  );
};

export default UpdateItemQuantity;
