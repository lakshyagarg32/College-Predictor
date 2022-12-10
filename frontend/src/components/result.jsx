import { useLocation } from "react-router-dom";
import Table from "./table/table";
import "./result.css";

function Result() {
  const { state } = useLocation();
  const { result } = state; // Read values passed on state
  console.log(result);
  return (
    <div className="result">
      <Table data={result} rowsPerPage={10} />
    </div>
  );
}

export default Result;
