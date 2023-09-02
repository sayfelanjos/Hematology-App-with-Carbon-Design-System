import React from "react";
import { useUser } from "../../hooks/useUser";
import styles from "./Login.module.scss";
import { Content } from "@carbon/react";
import backgroundImage from "../../assets/images/AdobeStock_544458009.jpeg";
import { Navigate } from "react-router-dom";

function LoginPage() {
  const user = useUser();

  if (user) {
    return <Navigate to="/app" />;
  }
  return (
    <Content className={styles["main-content"]}>
      <img
        className={styles["background-img"]}
        src={backgroundImage}
        alt="LoginPage Page Image Background"
      />
    </Content>
  );
}
export default LoginPage;
