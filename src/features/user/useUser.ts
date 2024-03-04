import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../app/store";
import { updateName } from "./userSlice";

const useUser = () => {
  const username = useSelector((state: RootState) => state.user.username);
  const dispatch = useDispatch<AppDispatch>();
  const dispatchUpdateName = (name: string) => {
    return dispatch(updateName(name));
  };

  return { username, dispatchUpdateName };
};

export default useUser;
