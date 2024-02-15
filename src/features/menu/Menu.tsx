import { useLoaderData } from "react-router-dom";
import MenuItem from "./MenuItem";
import { MenuData } from "../../types";

function Menu() {
  const menu = useLoaderData() as MenuData;
  console.log("menu from loader", menu);

  return (
    <ul>
      {menu.map((pizza) => (
        <MenuItem key={pizza.id} pizza={pizza} />
      ))}
    </ul>
  );
}

export default Menu;
