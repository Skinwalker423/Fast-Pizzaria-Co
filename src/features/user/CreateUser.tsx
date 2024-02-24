import { FormEvent } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { updateName } from "./userSlice";
import { RootState } from "../../app/store";

function CreateUser() {
  const username = useSelector((state: RootState) => state.user.username);
  const dispatch = useDispatch();

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
        onChange={(e) => dispatch(updateName(e.target.value))}
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
