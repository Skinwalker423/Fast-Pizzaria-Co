import useUser from "./useUser";

const Username = () => {
  const { username } = useUser();
  if (!username) return null;
  return (
    <div className="hidden text-sm font-semibold md:block">{username}</div>
  );
};

export default Username;
