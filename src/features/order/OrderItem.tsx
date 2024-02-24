import { CartItemProps } from "../../types";
import { formatCurrency } from "../../utils/helpers";

type OrderItemProps = {
  item: CartItemProps;
  isLoadingIngredients: boolean;
  ingredients: [];
};

function OrderItem({
  item,
  isLoadingIngredients,
  ingredients,
}: OrderItemProps) {
  const { quantity, name, totalPrice } = item;
  console.log(isLoadingIngredients, ingredients);

  return (
    <li>
      <div>
        <p>
          <span>{quantity}&times;</span> {name}
        </p>
        <p>{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}

export default OrderItem;
