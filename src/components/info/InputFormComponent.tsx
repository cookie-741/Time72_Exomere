interface InputFromProps {
  placeholder: string;
}
const InputFormComponent: React.FC<InputFromProps> = ({ placeholder }) => {
  return (
    <input
      className="px-5 py-2 border border-gray-100 w-full bg-gray-100 focus:outline-none"
      id="username"
      type="text"
      placeholder={placeholder}
    />
  );
};
export default InputFormComponent;
