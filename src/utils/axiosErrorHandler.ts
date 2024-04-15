import { isAxiosError } from "axios";

const isAxiosErrorHandler = (err: unknown) => {
  if (isAxiosError(err)) {
    return err.response?.data.message || err.message;
  } else {
    return "an exepcted error ";
  }
};

export default isAxiosErrorHandler
