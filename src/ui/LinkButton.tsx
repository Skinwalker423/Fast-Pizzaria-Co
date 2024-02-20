import { PropsWithChildren } from "react";
import { Link, useNavigate } from "react-router-dom";

interface LinkButtonProps extends PropsWithChildren {
  to: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({ children, to, ...rest }) => {
  const navigate = useNavigate();
  if (to === "-1") {
    return <button onClick={() => navigate(-1)}>&larr; Go back</button>;
  }

  return (
    <Link
      className="text-sm text-blue-500 hover:text-blue-700"
      to={to}
      {...rest}
    >
      {children}
    </Link>
  );
};

export default LinkButton;
