import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router-dom";
import { logInSchema, TLogInTypes } from "src/validations/logInSchema";
import { useAppDispatch, useAppSelector } from "@toolkit/hooks";
import { actAuthLogin, resetUI } from "@toolkit/Auth/authSlice";
import toast from "react-hot-toast";
import { useEffect } from "react";

const useLogin = () => {
  const [searchParam, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { status, error, accessToken } = useAppSelector((state) => state.auth);

  const MessageLog = searchParam.get("message") === "acount_created";

  const MessageLog_Req = searchParam.get("message") === "login_required";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLogInTypes>({
    mode: "onBlur",
    resolver: zodResolver(logInSchema),
  });

  const onSubmit: SubmitHandler<TLogInTypes> = (data) => {
    if (MessageLog) {
      setSearchParams("");
    }
    dispatch(actAuthLogin(data))
      .unwrap()
      .then(() => {
        // toast.success("Logged in successfully");
        navigate("/", { replace: true });
      })
      .catch(() => {
        if (error) {
          toast.error(error);
        }
      });
  };


  useEffect(() => {
    return () => {
      dispatch(resetUI());
    };
  }, [dispatch]);

  return {status , accessToken ,MessageLog , MessageLog_Req ,handleSubmit, onSubmit ,register ,errors, error}
};

export default useLogin;
