export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const order = {
    ...data,
    cart: JSON.parse(data["cart"]),
    priority: data["priority"] === "on" ? true : false,
  };

  console.log(order);

  return null;
}
