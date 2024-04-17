import { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface TInputProps {
  type: string;
  label: string;
  register: UseFormRegisterReturn<string>;
  error?: FieldError;
  name: string;
}

const Input = ({ type, register, label, name, error }: TInputProps) => {
  return (
    <>
      <label
        htmlFor={name}
        className={`block text-sm font-medium input-error text-gray-700 `}
      >
        {label}
      </label>

      <input
        {...register}
        id={name}
        type={type}
        className={`input input-bordered  w-full max-w-xs mt-1 ${
          error?.message && "input-error"
        }`}
      />
      {error?.message && (
        <div className=" text-red-600 mt-1">{error?.message}</div>
      )}
    </>
  );
};

export default Input;
