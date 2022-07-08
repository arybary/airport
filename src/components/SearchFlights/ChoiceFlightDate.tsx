/** @format */

import React from "react";
import { useSearchParams } from "react-router-dom";
import "./ChoiceFlightDate.scss";
const moment = require("moment");

const days = [
  { title: "yesterday", date: moment().subtract(1, "d") },
  { title: "today", date: moment() },
  { title: "tomorrow", date: moment().add(1, "d") },
];

const ChoiceFlightDate: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const value = searchParams.get("value") || "";
  const direction = searchParams.get("direction") || "departure";
  const dateActive = searchParams.get("date");

  const handleClick = (date: any) => {
    const formatDate = moment(date).format("DD-MM-YYYY");
    setSearchParams({ date: formatDate, direction, value });
  };
  return (
    <div className="dates">
      <input
        className="dates__input"
        type="date"
        onChange={(e) => handleClick(e.target.valueAsDate)}
      />
      <div className="dates__days">
        {days.map((day, i) => {
          const { date, title } = day;
          const classDayActive =
            dateActive === date.format("DD-MM-YYYY") ? "active" : "";
          return (
            <div
              key={i}
              onClick={() => handleClick(day.date)}
              className={`dates__day ${classDayActive}`}
            >
              <span className="dates__day-title">
                {date.format("dddd DD/MM")}
              </span>
              <p>{title}</p>
            </div>
          );
        })}
      </div>
      {dateActive && (
        <>
          <div className="dates__title">{dateActive}</div>
        </>
      )}
    </div>
  );
};

export default ChoiceFlightDate;
