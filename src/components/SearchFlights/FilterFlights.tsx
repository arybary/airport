import moment from "moment";
import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import "./FilterFlights.scss";

const FilterFlights: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const valueUlr = searchParams.get("value");
  const date = searchParams.get("date") || moment().format("DD-MM-YYYY");
  const direction = searchParams.get("direction") || "departure";
  const [valueInput, setValueInput] = useState(valueUlr || "");

  const handleClick = () => {
    setSearchParams({ date, direction, value: valueInput });
  };

  return (
    <div className="search">
      <i className="fas fa-search search__loop"></i>
      <input
        value={valueInput}
        onChange={(e) => setValueInput(e.target.value)}
        placeholder="Airline, destination or flight #"
        className="search__input"
        type="text"
      />
      <button className="search__btn" onClick={handleClick}>
        search
      </button>
    </div>
  );
};

export default FilterFlights;
