import type { InputHTMLAttributes } from "react";


interface IProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = ({...rest}: IProps) => {
  return (
      <input
        type={rest.type}
        name={rest.name}
        id={rest.id}
        className="border border-gray-300"
      />
  );
};

export default Input;
