import React from "react";
import styles from "./List.module.scss";
import TableTop from "../../components/table-top/TableTop";
import TableContainer from "../../components/table-container/TableContainer";
import TableSearcher from "../../components/table-searcher/TableSearcher";
import TablePagination from "../../components/table-pagination/TablePagination";
import Header from "../../components/profile-header/Header";

function List() {
  return (
    <div className={styles["list"]}>
      <Header />
      <div className={styles["list__main-content"]}>
        <TableTop />
        <TableSearcher />
        <TableContainer />
        <TablePagination />
      </div>
    </div>
  );
}

export default List;
