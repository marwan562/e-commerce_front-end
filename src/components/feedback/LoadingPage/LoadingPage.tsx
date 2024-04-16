import Lottie from "lottie-react";
import loading from "@assets/LottieFiles/loading.json";

const LoadingPage = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className=" w-[420px]">
        <Lottie animationData={loading} />
      </div>
    </div>
  );
};

export default LoadingPage;
