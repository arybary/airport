/** @format */

import moment from "moment";
import {
  FlightsAction,
  FlightsActionTypes,
  FlightsState,
} from "./flights.type";

const initData: FlightsState = {
  flightsData: { departure: [], arrival: [] },
  direction: "",
  value: "",
  date: "",
};

const flightsReduser = (
  state = initData,
  action: FlightsAction
): FlightsState => {
  switch (action.type) {
    case FlightsActionTypes.FLIGHTS_DATA_RECIEVED:
      return {
        ...state,
        flightsData: action.payload,
      };
    case FlightsActionTypes.FLIGHTS_PARAMS:
      return {
        ...state,
        ...action.payload,
      };

    case FlightsActionTypes.FLIGHTS_RESET:
      return initData;

    default:
      return state;
  }
};

export default flightsReduser;
