import { formatCurrency } from "../../utils/helpers";

function OrderItem({
  item,
  isLoadingIngredients,
  ingredients,
}) {
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
