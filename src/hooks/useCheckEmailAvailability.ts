import { GlobalBaseURL } from "@services/API/globalAxsios";
import { useState } from "react";
import { IUsers } from "src/types/common";

type TStatus = "idle" | "checking" | "available" | "notAvailable" | "failed";

const useCheckEmailAvailability = () => {
  const [emailAvailabilityStatus, setEmailAvailabilityStatus] =
    useState<TStatus>("idle");

  const [enteredEmail, setEnteredEmail] = useState<null | string>(null);

  const checkEmailAvailability = async (email: string) => {
    setEnteredEmail(email);
    setEmailAvailabilityStatus("checking");
    try {
      const res = await GlobalBaseURL.get<IUsers[]>(`users?email=${email}`);

      if (!res.data?.length) {
        setEmailAvailabilityStatus("available");
      } else {
        setEmailAvailabilityStatus("notAvailable");
      }
    } catch (error) {
      setEmailAvailabilityStatus("failed");
    }
  };

  const resetCheckEmailAvailability = () => {
    setEmailAvailabilityStatus("idle");
    setEnteredEmail(null);
  };
  return {
    emailAvailabilityStatus,
    checkEmailAvailability,
    enteredEmail,
    resetCheckEmailAvailability,
  };
};

export default useCheckEmailAvailability;
