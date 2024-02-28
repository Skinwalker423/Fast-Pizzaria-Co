import { useDispatch, useSelector } from "react-redux";
import { MenuItem as Item } from "../../types";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { addToCart, getItemQuantityWithId } from "../cart/cartSlice";
import DeleteItem from "../cart/DeleteItem";
import UpdateItemQuantity from "../cart/UpdateItemQuantity";

interface MenuItemProps {
  pizza: Item;
}

function MenuItem({ pizza }: MenuItemProps) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const itemQty = useSelector(getItemQuantityWithId(id));
  const dipatch = useDispatch();

  function handleAddItem() {
    const newItem = {
      addIngredients: ingredients,
      name,
      pizzaId: id,
      quantity: 1,
      removeIngredients: [],
      unitPrice,
      totalPrice: unitPrice * 1,
    };
    dipatch(addToCart(newItem));
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
          {!soldOut && !itemQty && (
            <Button onClick={handleAddItem} size="medium" className="px-2 py-2">
              Add to Cart
            </Button>
          )}
          {itemQty > 0 && (
            <div className="sm: flex items-center gap-3 sm:gap-8">
              <UpdateItemQuantity pizzaId={id} />
              <DeleteItem pizzaId={id} size="medium" />
            </div>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
