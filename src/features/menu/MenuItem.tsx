import { useDispatch, useSelector } from "react-redux";
import { MenuItem as Item } from "../../types";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { addToCart, increaseItemQuanity } from "../cart/cartSlice";
import { RootState } from "../../app/store";

interface MenuItemProps {
  pizza: Item;
}

function MenuItem({ pizza }: MenuItemProps) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const { cart } = useSelector((state: RootState) => state.cart);
  const dipatch = useDispatch();

  console.log(id, cart);
  const quantity = 1;

  const isInCart = cart.some((item) => item.pizzaId === id);

  function handleAddItem() {
    if (isInCart) {
      dipatch(increaseItemQuanity(id));
    } else {
      dipatch(
        addToCart({
          addIngredients: ingredients,
          name,
          pizzaId: id,
          quantity,
          removeIngredients: [],
          unitPrice,
          totalPrice: unitPrice * quantity,
        }),
      );
    }
  }

  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut && "opacity-70 grayscale"}`}
      />
      <div className="flex w-full flex-col pr-4">
        <h3 className="font-bold">{name}</h3>
        <p className="text-sm capitalize italic text-stone-500">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto flex w-full items-center justify-between">
          {!soldOut ? (
            <p className="text-green-700">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-red-700">
              Sold out
            </p>
          )}
          {!soldOut && (
            <Button onClick={handleAddItem} size="medium" className="px-2 py-2">
              Add to Cart
            </Button>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
