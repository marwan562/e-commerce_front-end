import { Link, useRouteError, isRouteErrorResponse } from "react-router-dom";
import Lottie from "lottie-react";
import notFound from "@assets/LottieFiles/notFound.json";

const ErrorPage = () => {
  const error = useRouteError();

  let errorStatus: number;
  let errorStatusText: string;

  if (isRouteErrorResponse(error)) {
    errorStatus = error.status;
    errorStatusText = error.statusText;
  } else {
    errorStatus = 404;
    errorStatusText = "page not found";
  }
  return (
    <div className="flex h-screen flex-col bg-white">
      <div className=" m-auto  w-[500px]">
        <Lottie
          animationData={notFound}
            onComplete={() => console.log("test Fire")}
        />
      </div>

      <div className="flex flex-1 items-center justify-center">
        <div className="mx-auto max-w-xl px-4 text-center">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {errorStatus}
            <br />
            {errorStatusText} !
          </h1>

          <p className="mt-4 text-gray-500">
            Try searching again, or return home to start from the beginning.
          </p>

          <Link
            to={"/"}
            replace={true}
            className="mt-6 inline-block rounded bg-gray-600 px-5 py-3 text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
