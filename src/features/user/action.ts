export async function creatUserAction({ request }) {
  const formData = await request.formData();
  const name = formData.get("name");
  console.log("name", name);

  return name;
}
