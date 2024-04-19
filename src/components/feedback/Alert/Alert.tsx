const AlertTypes = {
  success: "alert-success",
  error: "alert-error",
  info: "alert-info",
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
        fill="none"
        viewBox="0 0 24 24"
        className="stroke-current shrink-0 w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        ></path>
      </svg>

      {message && <span>{message}</span>}
      {error && <span>Error! {error}.</span>}
    </div>
  );
};

export default Alert;
