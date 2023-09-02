import React from "react";
import styles from "./TableHeader.module.scss";
import TableCell from "../table-cell/TableCell";

const TableHeader = () => {
  return (
    <thead className={styles["table-header"]}>
      <tr className={styles["table-header-row"]}>
        <th className={styles["table-header"]}>
          <div className={styles["wrapper-checkbox"]}>
            <label htmlFor="" className={styles["checkbox-label"]}></label>
            <input type="checkbox" />
          </div>
          <TableCell>Código</TableCell>
          <TableCell>Código do Fabricante</TableCell>
          <TableCell>Fabricante</TableCell>
          <TableCell>Unidade</TableCell>
          <TableCell>Lote</TableCell>
          <TableCell>Disponível</TableCell>
          <TableCell>Data de Entrada</TableCell>
          <TableCell>Data de Validade</TableCell>
          <TableCell>Condição</TableCell>
        </th>
      </tr>
    </thead>
  );
};

export default TableHeader;
