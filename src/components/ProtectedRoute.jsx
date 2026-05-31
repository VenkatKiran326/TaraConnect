import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children, allowedRole }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/signin" replace />;
  }

  if (allowedRole && user.role !== allowedRole) {
    const redirectPath = user.role === "brand" ? "/branddashboard" : user.role === "influencer" ? "/influencerdashboard" : "/";
    return <Navigate to={redirectPath} replace />;
  }

  return children;
};

export default ProtectedRoute;
