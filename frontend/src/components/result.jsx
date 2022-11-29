import { useLocation } from "react-router-dom";

function Result() {
  const { state } = useLocation();
  const { rank, gender, category, domicile_state, result } = state; // Read values passed on state
  console.log(result);
  return (
    <h1>
      {rank} {gender} {category} {domicile_state}{" "}
    </h1>
  );
}

export default Result;
