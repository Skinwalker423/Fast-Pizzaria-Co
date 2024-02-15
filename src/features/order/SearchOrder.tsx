import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchOrder = () => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/order/${value}`);
    setValue("");
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    setValue(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='search'
        placeholder='Search order number'
        value={value}
        onChange={handleChange}
        onBlur={() => console.log("out of focus")}
      />
    </form>
  );
};

export default SearchOrder;
