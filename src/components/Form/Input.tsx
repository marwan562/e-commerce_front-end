import React from "react";
import {
  FieldError,
  FieldValues,
  Path,
  UseFormRegister,
} from "react-hook-form";

interface TInputProps<T extends FieldValues> {
  type: string;
  label: string;
  register: UseFormRegister<T>;
  error?: FieldError;
  name: Path<T>;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

const Input = <T extends FieldValues>({
  type,
  register,
  label,
  name,
  error,
  onBlur,
}: TInputProps<T>) => {
  const onblurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    if (onBlur) {
      onBlur(e);
      register(name).onBlur(e);
    } else {
      register(name).onBlur(e);
    }
  };
  return (
    <>
      <label
        htmlFor={name}
        className={`block text-sm font-medium input-error text-gray-700 `}
      >
        {label}
      </label>

      <input
        {...register(name)}
        onBlur={onblurHandler}
        name={name}
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
