import { useLoaderData } from "react-router-dom";
import MenuItem from "./MenuItem";
import { MenuData } from "../../types";

function Menu() {
  const menu = useLoaderData() as MenuData;

  return (
    <ul className="divide-y-2 divide-stone-200">
      {menu.map((pizza) => (
        <MenuItem key={pizza.id} pizza={pizza} />
      ))}
    </ul>
  );
}

export default Menu;
