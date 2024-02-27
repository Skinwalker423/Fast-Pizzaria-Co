import { PropsWithChildren } from "react";
import { Link } from "react-router-dom";

interface ButtonProps extends PropsWithChildren {
  disabled?: boolean;
  className?: string;
  to?: string;
  color?: "primary" | "danger" | "warning" | "secondary";
  textColor?: string;
  size?: "small" | "medium" | "large";
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  disabled,
  size = "large",
  className,
  color = "primary",
  to,

  ...rest
}) => {
  const sizes = {
    small: "px-2 py-1 text-xs",
    medium: "px-3 py-2 sm:px-4 sm:py-2 text-sm",
    large: "px-4 py-3 sm:px-6 sm:py-4 text-sm",
  };
  const colors = {
    primary:
      "bg-yellow-500 text-stone-800 hover:bg-yellow-400 focus:bg-yellow-300 focus:ring-yellow-300",
    danger:
      "bg-red-700 text-stone-100 hover:bg-red-600 focus:bg-red-500 focus:ring-red-500",
    warning:
      "bg-stone-800 text-stone-200 hover:bg-stone-600 focus:bg-stone-500 focus:ring-stone-500",
    secondary:
      "bg-stone-100 text-stone-400 hover:text-stone-600 hover:bg-stone-200 focus:bg-stone-200 focus:text-stone-600 focus:ring-stone-200 border border-stone-300",
  };
  const classes = `rounded-full ${sizes[size]} font-semibold uppercase tracking-wide transition-colors duration-300 focus:outline-none focus:ring focus:ring-offset-2 disabled:cursor-not-allowed ${colors[color]} disabled:bg-stone-300 ${className}`;
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
