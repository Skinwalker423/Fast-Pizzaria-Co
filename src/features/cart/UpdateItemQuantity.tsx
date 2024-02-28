import Button from "../../ui/Button";

const UpdateItemQuantity = () => {
  return (
    <div className="flex items-center gap-1 md:gap-3">
      <Button size="small">-</Button>
      <Button size="small">+</Button>
    </div>
  );
};

export default UpdateItemQuantity;
