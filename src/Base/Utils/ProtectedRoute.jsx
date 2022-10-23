import React from "react";
import { Navigate, Route, useLocation } from "react-router-dom";

function ProtectedRoute({ children }) {
  const isAuthenticated = localStorage.getItem("authToken");

  return isAuthenticated ? children : <Navigate to="/sign-in" replace/>;
}

export default ProtectedRoute;