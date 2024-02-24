import { FormEvent } from "react";
import Button from "../../ui/Button";
import useUpdateName from "./useUpdateName";

function CreateUser() {
  const { dispatchUpdateName, username } = useUpdateName();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="mb-4 text-sm md:text-base ">
        👋 Welcome! Please start by telling us your name:
      </p>

      <input
        className="form-input mb-5 w-72"
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => dispatchUpdateName(e.target.value)}
      />

      {username !== "" && (
        <div>
          <Button>Start ordering, {username}</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
