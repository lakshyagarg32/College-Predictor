import React, { useState } from "react";

import useTable from "../../hooks/useTable";
import TableFooter from "./TableFooter/tableFooter";
import styles from "./Table.module.css";

const Table = ({ data, rowsPerPage }) => {
  const [page, setPage] = useState(1);
  const { slice, range } = useTable(data, page, rowsPerPage);
  return (
    <>
      <table className={styles.table}>
        <thead className={styles.tableRowHeader}>
          <tr>
            <th className={styles.tableHeader}>Institute</th>
            <th className={styles.tableHeader}>Academic Program Name</th>
            <th className={styles.tableHeader}>Quota</th>
            <th className={styles.tableHeader}>Seat Type</th>
            <th className={styles.tableHeader}>Gender</th>
            <th className={styles.tableHeader}>Opening Rank</th>
            <th className={styles.tableHeader}>Closing Rank</th>
          </tr>
        </thead>
        <tbody>
          {slice.map((el) => (
            <tr className={styles.tableRowItems} key={el.id}>
              <td className={styles.tableCell}>{el.institute}</td>
              <td className={styles.tableCell}>{el.branch}</td>
              <td className={styles.tableCell}>{el.quota}</td>
              <td className={styles.tableCell}>{el.category}</td>
              <td className={styles.tableCell}>{el.gender}</td>
              <td className={styles.tableCell}>{el.opening_rank}</td>
              <td className={styles.tableCell}>{el.closing_rank}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <TableFooter range={range} slice={slice} setPage={setPage} page={page} />
    </>
  );
};

export default Table;