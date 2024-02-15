import { ChangeEvent, useState } from "react";

const SearchOrder = () => {
  const [value, setValue] = useState("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    setValue(e.target.value);
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
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
