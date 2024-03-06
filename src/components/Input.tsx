interface InputProps {
  placeholder: string;
  type: "text" | "email" | "password";
  name: string;
  id: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  className?: string;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  type,
  name,
  id,
  value,
  onChange,
  className,
}) => {
  return (
    <input
      placeholder={placeholder}
      type={type}
      name={name}
      id={id}
      value={value}
      onChange={onChange}
      className={`w-full bg-white border-gray-300 text-black rounded-md focus:ring focus:ring-gray-200 focus:outline-none focus:border-gray-500 hover:bg-gray-200 py-2.5 px-4 mb-6 ${className}`}
    />
  );
};

export default Input;
