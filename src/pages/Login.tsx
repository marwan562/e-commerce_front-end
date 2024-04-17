import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { logInSchema, TLogInTypes } from "src/validations/logInSchema";
import Input from "@componenets/Form/Input";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLogInTypes>({
    mode: "onBlur",
    resolver: zodResolver(logInSchema),
  });

  const logInInputs = [
    {
      type: "text",
      label: "First Name",
      register: register("first_name"),
      error: errors.first_name,
      name: "first_name",
    },

    {
      type: "password",
      label: "Password",
      register: register("passwoed"),
      error: errors.passwoed,
      name: "password",
    },
  ];

  const onSubmit: SubmitHandler<TLogInTypes> = (data) => {
    console.log(data);
  };

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
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
        {logInInputs.map((el, inx) => (
          <div key={inx}>
            <Input {...el} />
          </div>
        ))}
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
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
