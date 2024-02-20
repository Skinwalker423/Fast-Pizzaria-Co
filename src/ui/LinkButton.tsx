import { PropsWithChildren } from "react";
import { Link } from "react-router-dom";

interface LinkButtonProps extends PropsWithChildren {
  to: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({ children, to, ...rest }) => {
  return (
    <Link {...rest} is="button" to={to}>
      <button>{children}</button>
    </Link>
  );
};

export default LinkButton;
