import { Link, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Input from "@componenets/Form/Input";
import Alert from "@componenets/feedback/Alert/Alert";
import useLogin from "@hooks/useLogin";

const Login = () => {
  // hook login
  const {
    status,
    accessToken,
    MessageLog,
    MessageLog_Req,
    handleSubmit,
    onSubmit,
    register,
    errors,
    error,
  } = useLogin();

  // Protected route
  if (accessToken) {
    return <Navigate to={"/"} />;
  }

  return (
    <>
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Tost notification */}
        <Toaster reverseOrder={false} />
        {/* Alert New Acc */}
        <div className=" mb-[20px]">
          {MessageLog_Req && (
            <Alert
              type="info"
              message=" you can't access last page, Please login..! "
            />
          )}
        </div>

        {/* -------------- */}
        <div className=" mb-[20px]">
          {MessageLog && (
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
