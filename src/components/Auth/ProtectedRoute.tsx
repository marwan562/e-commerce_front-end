import { useAppSelector } from "@toolkit/hooks";
import React from "react";
import { Navigate } from "react-router-dom";

type TProps = {
  children: React.ReactNode;
};

const ProtectedRoute = ({ children }: TProps) => {
  const { accessToken } = useAppSelector((state) => state.auth);

  if (!accessToken) {
    return <Navigate to={"/login?message=login_required"} />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
