import React from "react";
import styles from "./TableSearcher.module.scss";

function TableSearcher() {
  return (
    <div className={styles["table-search-container"]}>
      <input className={styles["table-search-input"]} type={"search"}></input>
      <div className={styles["table-search-dropdown"]}></div>
    </div>
  );
}

export default TableSearcher;
