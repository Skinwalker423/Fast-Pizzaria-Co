import { FormEvent, useState } from "react";
import Button from "../../ui/Button";
import useUser from "./useUser";
import { useNavigate } from "react-router-dom";

function CreateUser() {
  const { dispatchUpdateName, username } = useUser();
  const [userInput, setUserInput] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!userInput) return;
    dispatchUpdateName(userInput);
    navigate("/menu");
  }

  if (username)
    return <Button to="/menu">Continue browsing, {username}</Button>;

  return (
    <form onSubmit={handleSubmit}>
      <p className="mb-4 text-sm md:text-base ">
        👋 Welcome! Please start by telling us your name:
      </p>

      <input
        className="form-input mb-5 w-72"
        type="text"
        placeholder="Your full name"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />

      {userInput !== "" && (
        <div>
          <Button>Start ordering</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
