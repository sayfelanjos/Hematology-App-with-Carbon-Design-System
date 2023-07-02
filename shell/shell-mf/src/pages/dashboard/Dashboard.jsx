import React from "react";
import { useUser } from "../../hooks/useUser";
import styles from "./Dashboard.module.scss";
import { Navigate } from "react-router-dom";

const Dashboard = () => {
  const user = useUser();

  if (!user) {
    return <Navigate to="/app/login" />;
  }
  return (
    // TODO: need to put fallback component
    <p>Dashboard</p>
  );
};

export default Dashboard;
