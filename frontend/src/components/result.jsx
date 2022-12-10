import { useLocation } from "react-router-dom";
import { useMemo,useState } from 'react';
import Pagination from "./table/Pagination";
import "./result.css";

let PageSize = 8;

function Result() {
  const { state } = useLocation();
  const { result } = state; // Read values passed on state
  console.log(result);
  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return result.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);
  return (
    <div className="result">
      <table>
        <thead>
          <tr>
            <th>Institute</th>
            <th>Academic Program Name</th>
            <th>Quota</th>
            <th>Seat Type</th>
            <th>Gender</th>
            <th>Opening Rank</th>
            <th>Closing Rank</th>
          </tr>
        </thead>
        <tbody>
          {currentTableData.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.institute}</td>
                <td>{item.branch}</td>
                <td>{item.quota}</td>
                <td>{item.category}</td>
                <td>{item.gender}</td>
                <td>{item.opening_rank}</td>
                <td>{item.closing_rank}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={result.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
}

export default Result;
