const AlertTypes = {
  success: "alert-success",
  error: "alert-error",
};

type TProps = {
  type: keyof typeof AlertTypes;
  error?: string;
  message?: string;
};

const Alert = ({ type, error, message }: TProps) => {
  const renderAlert = AlertTypes[type];
  return (
    <div role="alert" className={`alert  mt-4 ${renderAlert}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="stroke-current shrink-0 h-6 w-6"
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
      {message && <span>{message}</span>}
      {error && <span>Error! {error}.</span>}
    </div>
  );
};

export default Alert;
