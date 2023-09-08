import React from "react";
import styles from "./FormBottom.module.scss";

function FormBottom() {
  return (
    <div className={styles["form-bottom"]}>
      <button className={styles["form-bottom__cancel-button"]}>Cancel</button>
      <button className={styles["form-bottom__save-button"]}>Save</button>
    </div>
  );
}

export default FormBottom;
