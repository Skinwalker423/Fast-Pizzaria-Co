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

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Search order number"
        value={value}
        onChange={handleChange}
        className="w-28 rounded-full bg-yellow-100 px-4 py-2 text-sm transition-all ease-in-out placeholder:text-stone-400 focus:w-36 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50 sm:w-64 sm:focus:w-72"
      />
    </form>
  );
};

export default SearchOrder;
