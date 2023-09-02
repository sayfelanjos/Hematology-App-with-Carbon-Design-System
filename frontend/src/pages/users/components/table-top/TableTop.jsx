import React from "react";
import styles from "./TableTop.module.scss";
import TableButton from "../table-button/TableButton";

function TableTop() {
  return (
    <div className={styles["table-top"]}>
      <TableButton></TableButton>
    </div>
  );
}

export default TableTop;
