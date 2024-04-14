import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  // Not the best solution to store auth in local storage need to
  // do some research on this.
  const isAuthenticated = window.sessionStorage.getItem("accessToken");

  return isAuthenticated ? children : <Navigate to="/sign-in" replace/>;
}

export default ProtectedRoute;