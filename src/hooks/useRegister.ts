import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {  useNavigate } from "react-router-dom";
import { signUpSchema, TSignUpTypes } from "src/validations/signUpSchema";
import React, { useEffect } from "react";
import useCheckEmailAvailability from "@hooks/useCheckEmailAvailability";
import { useAppDispatch, useAppSelector } from "@toolkit/hooks";
import { actAuthRegister, resetUI } from "@toolkit/Auth/authSlice";

const useRegister = () => {
  const dispatch = useAppDispatch();
  const { status, error, accessToken } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    getFieldState,
    trigger,
    reset,
    formState: { errors },
  } = useForm<TSignUpTypes>({
    mode: "onBlur",
    resolver: zodResolver(signUpSchema),
  });

  // Check EmailAvailability
  const {
    enteredEmail,
    checkEmailAvailability,
    emailAvailabilityStatus,
    resetCheckEmailAvailability,
  } = useCheckEmailAvailability();

  const emailOnBlurHandler = async (e: React.FocusEvent<HTMLInputElement>) => {
    await trigger("email");
    const email = e.target.value;
    const { isDirty, invalid } = getFieldState("email");
    if (isDirty && !invalid && enteredEmail !== email) {
      //Checking Email;
      checkEmailAvailability(email);
    }

    if (invalid && !register("email")) {
      resetCheckEmailAvailability();
    }
  };

  const onSubmit: SubmitHandler<TSignUpTypes> = (data) => {
    const { first_name, last_name, email, password } = data;
    dispatch(actAuthRegister({ first_name, last_name, email, password }))
      .unwrap()
      .then(() => {
        reset();
        navigate("/login?message=acount_created", { replace: true });
      });
  };

  useEffect(() => {
    return () => {
      dispatch(resetUI());
    };
  }, [dispatch]);

  return {handleSubmit , onSubmit ,  status, register , error , emailAvailabilityStatus , emailOnBlurHandler , accessToken , errors}
};

export default useRegister;
