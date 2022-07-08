/** @format */

import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useActions } from "../../store/useActions";
import ButtonFlightDirection from "./ButtonFlightDirection";
import ChoiceFlightDate from "./ChoiceFlightDate";
import FilterFlights from "./FilterFlights";
import "./SearchFlights.scss";
import TableFlights from "./TableFlights/TableFlights";

const SearchFlights: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const direction = searchParams.get("direction") || "";
  const date = searchParams.get("date") || "";
  const value = searchParams.get("value") || "";

  const {
    getFlightsData,
    flightsSeachValue,
    flightsDirection,
    flightsParamReset,
  } = useActions();

  useEffect(() => {
    if (date === "") return;
    flightsSeachValue(value);
    flightsDirection(direction);
    getFlightsData(date);
  }, [date, direction, flightsDirection, flightsSeachValue, getFlightsData, value]);

  const resetParam = () => {
    flightsParamReset();
    setSearchParams({ date: "", direction: "", value: "" });
  };

  return (
    <>
      <div className="search__header">SEARCH FLIGHT KIEV Sykorsky Airport</div>
      <FilterFlights />
      <div>
        <ButtonFlightDirection direction={"departure"} />
        <ButtonFlightDirection direction={"arrival"} />
      </div>
      <ChoiceFlightDate />
      {date && (
        <>
          <div className="search__clear">
            <button className="search__clear-right" onClick={resetParam}>
              X
            </button>
          </div>
          <TableFlights />
        </>
      )}
    </>
  );
};

export default SearchFlights;
