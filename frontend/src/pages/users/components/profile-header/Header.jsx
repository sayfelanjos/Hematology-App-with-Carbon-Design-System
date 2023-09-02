import React from "react";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles["user-header"]}>
      <h6 className={styles["user-header__breadcrumb"]}>Home/Insumos/Consultar</h6>
      <h1 className={styles["user-header__module-name"]}>Insumos-Lista</h1>
    </div>
  );
};

export default Header;
