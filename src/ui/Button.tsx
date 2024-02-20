interface ButtonProps {
  disabled: boolean;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, disabled }) => {
  return (
    <button
      disabled={disabled}
      className="rounded-full bg-yellow-500 px-4 py-3 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-400 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-stone-300"
    >
      {children}
    </button>
  );
};

export default Button;
