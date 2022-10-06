import axios from "axios";
import { Dispatch } from "react";
import { FlightsAction, FlightsActionTypes } from "./flights.type";
import { RootState } from "../store";

export const flightsDataRecieved = (flightsData: any): FlightsAction => {
  return {
    type: FlightsActionTypes.FLIGHTS_DATA_RECIEVED,
    payload: flightsData,
  };
};

export const flightsParam = (
  date: string,
  direction: string,
  value: string
): FlightsAction => {
  return {
    type: FlightsActionTypes.FLIGHTS_PARAMS,
    payload: { date, direction, value },
  };
};

export const flightsParamReset = (): FlightsAction => {
  return {
    type: FlightsActionTypes.FLIGHTS_RESET,
  };
};

export const getFlightsData = () => {
  return async function (
    dispatch: Dispatch<FlightsAction>,
    getState: () => RootState
  ) {
    const { date } = getState().flights;
    
    const response = await axios.get(
      `https://api.iev.aero/api/flights/${date}`
    );
    return dispatch(flightsDataRecieved(response.data.body));
  };
};
