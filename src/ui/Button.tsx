import { PropsWithChildren } from "react";
import { Link } from "react-router-dom";

interface ButtonProps extends PropsWithChildren {
  disabled?: boolean;
  className?: string;
  to?: string;
  color?: string;
  textColor?: string;
  size?: "small" | "medium" | "large";
}

const Button: React.FC<ButtonProps> = ({
  children,
  disabled,
  size = "large",
  className,
  to,
  ...rest
}) => {
  const sizes = {
    small: "px-2 py-1 text-xs",
    medium: "px-3 py-2 sm:px-4 sm:py-2 text-sm",
    large: "px-4 py-3 sm:px-6 sm:py-4",
  };
  const classes = `rounded-full bg-yellow-500 ${sizes[size]} font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-400 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-stone-300  ${className}`;
  if (to)
    return (
      <Link className={classes} to={to}>
        {children}
      </Link>
    );

  return (
    <button disabled={disabled} {...rest} className={classes}>
      {children}
    </button>
  );
};

export default Button;
