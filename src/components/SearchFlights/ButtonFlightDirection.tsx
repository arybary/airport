/** @format */

import React from "react";
import { useSearchParams } from "react-router-dom";
import "./ButtonFlightDirection.scss";

const moment = require("moment");

interface PropsDirection {
  direction: string;
}

const ButtonFlightDirection: React.FC<PropsDirection> = ({ direction }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const value = searchParams.get("value") || "";
  const date = searchParams.get("date") || moment().format("DD-MM-YYYY");

  const directionActive = searchParams.get("direction");
  const directClassActive = directionActive === direction ? "active" : "";

  const handleClick = () => {
    setSearchParams({ date, direction, value });
  };

  return (
    <button
      className={`button-direction ${directClassActive}`}
      onClick={handleClick}
    >
      {direction}
    </button>
  );
};

export default ButtonFlightDirection;
