import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input(props: InputProps) {
  return (
    <input
      {...props}
      className="bg-gray-500 text-gray-100 outline-none focus:ring-1 ring-purple-dark placeholder:text-gray-300 p-4 rounded-lg w-full"
    />
  );
}
