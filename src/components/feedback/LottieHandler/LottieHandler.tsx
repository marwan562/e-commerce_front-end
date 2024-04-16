import Lottie from "lottie-react";
import loading from "@assets/LottieFiles/loading.json";
import empty from "@assets/LottieFiles/empty.json";
import notFound from "@assets/LottieFiles/notFound.json";
import error from "@assets/LottieFiles/error.json";

const lottieTypes = {
  loading,
  empty,
  error,
  notFound,
};

type TProps = {
  type: keyof typeof lottieTypes;
  message?: string | null;
};

const LottieHandler = ({ type, message }: TProps) => {
  const lottie = lottieTypes[type];
  return (
    <div className="flex items-center justify-center h-screen">
      <div className=" w-[400px]">
        <Lottie animationData={lottie} className=" mb-[20px]" />
        {message && (
          <h2 className=" text-center text-3xl "> {message}</h2>
        )}
      </div>
    </div>
  );
};

export default LottieHandler;
