import Lottie from "lottie-react";
import empty from "@assets/LottieFiles/empty.json";

const EmptyProducts = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className=" w-[300px] ">
        <Lottie animationData={empty} />
      </div>
    </div>
  );
};

export default EmptyProducts;
