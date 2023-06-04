import React from 'react';
import styles from "./Collapse.module.scss";

const Collapse = () => {
  return (
    <div className="collapse">
      <button className={styles["collapse__button"]}>
        Collapse Button
      </button>
      <ul className={styles["collapse__menu"]}>
        <li className={styles["collapse__menu-item"]}>Link 1</li>
        <li className={styles["collapse__menu-item"]}>Link 2</li>
        <li className={styles["collapse__menu-item"]}>Link 3</li>
        <li className={styles["collapse__menu-item"]}>Link 4</li>
        <li className={styles["collapse__menu-item"]}>Link 5</li>
      </ul>
    </div>
  );
};

export default Collapse;