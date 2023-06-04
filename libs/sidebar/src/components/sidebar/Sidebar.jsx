import React from 'react';

import styles from "./Sidebar.module.scss";
import Collapse from "../collapse/Collapse";

export default Sidebar;

function Sidebar(props) {
  return (
    <aside className={styles["sidebar"]}>
      <Collapse />
    </aside>
  );
}
