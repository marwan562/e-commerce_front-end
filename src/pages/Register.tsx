import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Logo from "@assets/Svg/LogoSvg";
import { Link } from "react-router-dom";
import { signUpSchema, TSignUpTypes } from "src/validations/signUpSchema";
import Input from "@componenets/Form/Input";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TSignUpTypes>({
    mode: "onBlur",
    resolver: zodResolver(signUpSchema),
  });

  const signUpInputs = [
    {
      type: "text",
      label: "First Name",
      register: register("first_name"),
      error: errors.first_name,
      name: "first_name",
    },
    {
      type: "text",
      label: "Last Name",
      register: register("last_name"),
      error: errors.last_name,
      name: "last_name",
    },
    {
      type: "email",
      label: "Email",
      register: register("email"),
      error: errors.email,
      name: "email",
    },
    {
      type: "password",
      label: "Password",
      register: register("password"),
      error: errors.password,
      name: "password",
    },
    {
      type: "password",
      label: "Confirm Password",
      register: register("password_confirmation"),
      error: errors.password_confirmation,
      name: "password_confirmation",
    },
  ];

  const onSubmit: SubmitHandler<TSignUpTypes> = (data) => {
    console.log(data);
  };

  return (
    <section className="bg-white ">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <aside className="relative block h-16  lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1605106702734-205df224ecce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </aside>

        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            <a className="block text-gray-600" href="#">
              <span className="sr-only">Home</span>
              <Logo />
            </a>

            <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
              Welcome to E-Commerce App
            </h1>

            <p className="mt-4 leading-relaxed text-gray-500">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              nam dolorum aliquam, quibusdam aperiam voluptatum.
            </p>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mt-8 grid grid-cols-6 gap-6"
            >
              {signUpInputs.map((el, inx) => (
                <div key={inx} className="col-span-6 sm:col-span-3">
                  <Input {...el} />
                </div>
              ))}

              <div className="col-span-6">
                <p className="text-sm text-gray-500">
                  By creating an account, you agree to our
                  <a href="#" className="text-gray-700 underline">
                    {" "}
                    terms and conditions{" "}
                  </a>
                  and
                  <a href="#" className="text-gray-700 underline">
                    {""} privacy policy
                  </a>
                  .
                </p>
              </div>

              <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                <button
                  type="submit"
                  className="inline-block shrink-0 rounded-md border border-gray-600 bg-gray-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-gray-600 focus:outline-none focus:ring active:text-gray-500"
                >
                  Create an account
                </button>

                <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                  Already have an account?
                  <Link to="/login" className="text-gray-700 underline">
                    Log in
                  </Link>
                  .
                </p>
              </div>
            </form>
          </div>
        </main>
      </div>
    </section>
  );
};

export default Register;
