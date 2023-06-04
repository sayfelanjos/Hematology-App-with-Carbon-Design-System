import React from "react";
import styles from "./App.module.scss";
import PageNotFoundImage from "../public/15635884_5638965.jpg";

const App = () => {
  return (
    <div className={styles["customers-and-suppliers-container"]}>
      <img
        className={styles["customers-and-suppliers-page-not-found-image"]}
        src={PageNotFoundImage}
        alt="Page Not Found Image"
      />
    </div>
  );
};

export default App;
