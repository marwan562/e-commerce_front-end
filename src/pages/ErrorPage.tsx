import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import notFound from "@assets/LottieFiles/notFound.json";

const ErrorPage = () => {
  return (
    <div className="flex h-screen flex-col bg-white">
      <div className=" m-auto  w-[500px]">
        <Lottie
          animationData={notFound}
          onComplete={() => console.log("test Fire")}
        />
      </div>

      <Link
        to={"/"}
        replace={true}
        className="mt-6 inline-block rounded bg-gray-600 px-5 py-3 text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
