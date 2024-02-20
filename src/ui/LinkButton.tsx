import { PropsWithChildren } from "react";
import { Link, useNavigate } from "react-router-dom";

interface LinkButtonProps extends PropsWithChildren {
  to: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({ children, to, ...rest }) => {
  const navigate = useNavigate();

  const classes = "text-sm text-blue-500 hover:text-blue-700 hover:underline";

  if (to === "-1") {
    return (
      <button className={classes} {...rest} onClick={() => navigate(-1)}>
        {children}
      </button>
    );
  }

  return (
    <Link className={classes} to={to} {...rest}>
      {children}
    </Link>
  );
};

export default LinkButton;
