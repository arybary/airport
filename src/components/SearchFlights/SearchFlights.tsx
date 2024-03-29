import React, { useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { useActions } from "../useActions";
import DirectionFlight from "./DirectionFlight";
import DateFlight from "./DateFlight";
import FilterFlights from "./FilterFlights";
import "./SearchFlights.scss";
import TableFlights from "./TableFlights/TableFlights";

const SearchFlights: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const direction = searchParams.get("direction") || "";
  const date = searchParams.get("date") || "";
  const value = searchParams.get("value") || "";

  const { getFlightsData,flightsParam, flightsParamReset } = useActions();


  useEffect(() => {
    if(date==='') return;
    
    getFlightsData();
  },[date, getFlightsData]);

  useMemo(() => {
    flightsParam(date, direction, value);
  }, [date, value, direction, flightsParam]);

  const resetParam = () => {
    flightsParamReset();
    setSearchParams({ date: "", direction: "", value: "" });
    window.location.reload();
  };

  return (
    <>
      <div className="search__header">SEARCH_FLIGHT KIEV Sykorsky Airport</div>
      <FilterFlights />
      <div>
        <DirectionFlight direction={"departure"} />
        <DirectionFlight direction={"arrival"} />
      </div>
      <DateFlight />
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
