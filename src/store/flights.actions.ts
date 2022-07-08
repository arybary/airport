/** @format */

import axios from "axios";
import { Dispatch } from "react";

import { FlightsAction, FlightsActionTypes } from "./flights.type";

export const flightsDataRecieved = (flightsData: any): FlightsAction => {
  return {
    type: FlightsActionTypes.FLIGHTS_DATA_RECIEVED,
    payload: flightsData,
  };
};

export const flightsDirection = (direction: string): FlightsAction => {
  return {
    type: FlightsActionTypes.FLIGHTS_DIRECTION,
    payload: direction,
  };
};

export const flightsSeachValue = (value: string): FlightsAction => {
  return {
    type: FlightsActionTypes.FLIGHTS_SEACH_VALUE,
    payload: value,
  };
};

export const flightsDate = (date: string): FlightsAction => {
  return {
    type: FlightsActionTypes.FLIGHTS_DATE,
    payload: date,
  };
};
export const flightsParamReset = (): FlightsAction => {
  return {
    type: FlightsActionTypes.FLIGHTS_RESET,
  };
};

export const getFlightsData = (date: string) => {
  if (date === '') {
    return;
  }
  return async function (dispatch: Dispatch<FlightsAction>) {
    const response = await axios.get(
      `https://api.iev.aero/api/flights/${date}`
    );
    dispatch(flightsDataRecieved(response.data.body));
  };
};
