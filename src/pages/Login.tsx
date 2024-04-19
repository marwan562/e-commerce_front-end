import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { logInSchema, TLogInTypes } from "src/validations/logInSchema";
import Input from "@componenets/Form/Input";
import Alert from "@componenets/feedback/Alert/Alert";
import { useAppDispatch, useAppSelector } from "@toolkit/hooks";
import { actAuthLogin, resetUI } from "@toolkit/Auth/authSlice";
import toast, { Toaster } from "react-hot-toast";
import { useEffect } from "react";

const Login = () => {
  const [searchParam, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { status, error } = useAppSelector((state) => state.auth);

  const searchParamsGetMessage =
    searchParam.get("message") === "acount_created";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLogInTypes>({
    mode: "onBlur",
    resolver: zodResolver(logInSchema),
  });

  const onSubmit: SubmitHandler<TLogInTypes> = (data) => {
    if (searchParamsGetMessage) {
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
      dispatch(resetUI())
    }
  },[dispatch])

  return (
    <>
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Tost notification */}
        <Toaster reverseOrder={false} />
        {/* Alert New Acc */}
        <div className=" mb-[20px]">
          {searchParamsGetMessage && (
            <Alert
              type="info"
              message="Your acount created successfully, Please login..!"
            />
          )}
        </div>
        {/* Banner Home Page a*/}
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">Get started today!</h1>

          <p className="mt-4 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero
            nulla eaque error neque ipsa culpa autem, at itaque nostrum!
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto mb-0 mt-8 max-w-md space-y-4"
        >
          <div className="col-span-6 sm:col-span-3">
            <Input
              name="email"
              type="text"
              label="First Name"
              register={register}
              error={
                errors.email?.message
                  ? errors.password?.message
                  : error === "Cannot find user"
                  ? "Cannot find user"
                  : ""
              }
            />
          </div>
          <div className="col-span-6 sm:col-span-3">
            <Input
              name="password"
              type="password"
              label="Password"
              register={register}
              error={
                errors.password?.message
                  ? errors.password?.message
                  : error === "Incorrect password"
                  ? "Incorrect password"
                  : ""
              }
            />
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">
              No account?
              <Link to={"/register"} className="underline">
                Sign up
              </Link>
            </p>

            <button
              type="submit"
              className="inline-block rounded-lg bg-gray-500 hover:bg-gray-600 px-5 py-3 text-sm font-medium text-white"
            >
              {status === "pending" ? "Loading..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
