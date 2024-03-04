import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../app/store";
import { getUserAddress, updateName } from "./userSlice";

const useUser = () => {
  const user = useSelector((state: RootState) => state.user);
  const username = user.username;
  const address = useSelector(getUserAddress);
  const status = user.status;
  const position = user.position;
  const dispatch = useDispatch<AppDispatch>();
  const dispatchUpdateName = (name: string) => {
    return dispatch(updateName(name));
  };

  return {
    username,
    dispatchUpdateName,
    address,
    status,
    position,
    error: user?.error,
  };
};

export default useUser;
