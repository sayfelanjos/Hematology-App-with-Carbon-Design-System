import React from "react";
import { Redirect, useLocation } from "react-router-dom";
const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const user = false;

  if (!user) {
    return children;
  }
  return children;
};

export default PrivateRoute;
