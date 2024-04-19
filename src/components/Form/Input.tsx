import React from "react";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";

interface TInputProps<T extends FieldValues> {
  type: string;
  label: string;
  register: UseFormRegister<T>;
  error?: string;
  name: Path<T>;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  emailCheckText?: string;
  successEmail?: string;
  disabled?: boolean;
}

const Input = <T extends FieldValues>({
  type,
  register,
  label,
  name,
  error,
  onBlur,
  emailCheckText,
  successEmail,
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
          error && "input-error"
        } ${successEmail ? " input-success" : ""}`}
      />
      <div className=" text-green-500"> {successEmail}</div>
      {emailCheckText}
      {error && <div className=" text-red-600 mt-1">{error}</div>}
    </>
  );
};

export default Input;
