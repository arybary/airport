/** @format */

import moment from "moment";
import React from "react";

interface Flight {
  terminal: string;
  time: string;
  destination: string;
  status: string;
  airline: any;
  code: string;
}

const RowFlight: React.FC<Flight> = ({
  terminal,
  time,
  destination,
  status,
  airline,
  code,
}) => (
  <tr>
    <td>
      <span className={`terminal terminal_${terminal}`}>{terminal}</span>
    </td>
    <td>{moment(time).format("LT")}</td>
    <td>{destination}</td>
    <td>{status}</td>
    <td className="airline">
      {airline.en.name}
      <img className="item-logo" src={airline.en.logoName} alt="logo" />
    </td>
    <td className="td-hiden">{code}</td>
  </tr>
);

export default RowFlight;
