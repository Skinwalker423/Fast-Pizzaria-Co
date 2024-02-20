import { PropsWithChildren } from "react";
import { Link } from "react-router-dom";

interface ButtonProps extends PropsWithChildren {
  disabled?: boolean;
  className?: string;
  to?: string;
  color?: string;
  textColor?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  disabled,
  className,
  to,
  ...rest
}) => {
  const classes = `rounded-full bg-yellow-500 px-4 py-3 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-400 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-stone-300 sm:px-6 sm:py-4 ${className}`;

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
