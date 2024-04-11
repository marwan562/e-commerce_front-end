import { TError, TStatus } from "@toolkit/common/types";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  status: TStatus;
  error: TError;
};

const Loanding = ({ children, status, error }: Props) => {
  return (
    <div className="   ">
      {status === "pending" ? (
        <progress className="progress container w-2/4  m-auto  pb-[40px]   flex items-center justify-center"></progress>
      ) : status === "failed" ? (
        <div role="alert" className="alert alert-error">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Error! {error}.</span>
        </div>
      ) : (
        children
      )}
    </div>
  );
};

export default Loanding;
