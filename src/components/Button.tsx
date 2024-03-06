interface ButtonProps {
  text: string;
  type: "button" | "submit" | "reset";
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ text, type, className }) => {
  return (
    <button
      type={type}
      className={`w-full font-semibold bg-amber-400 text-black py-2.5 px-4 rounded-md hover:bg-amber-500 transition duration-300 mb-4 ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
