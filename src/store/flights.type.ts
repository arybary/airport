/** @format */

export interface FlightsState {
  flightsData: any;
  direction: string;
  value: string;
  date: string;
}
export interface PayloadFlightsParams {
  direction: string;
  value: string;
  date: string;
}

export enum FlightsActionTypes {
  FLIGHTS_DATA_RECIEVED = "FLIGHTS_DATA_RECIEVED",
  FLIGHTS_PARAMS = "FLIGHTS_PARAMS",
  FLIGHTS_RESET = "FLIGHTS_RESET",
}

interface FlightsDataRecieved {
  type: FlightsActionTypes.FLIGHTS_DATA_RECIEVED;
  payload: any;
}
interface FlightsParams {
  type: FlightsActionTypes.FLIGHTS_PARAMS;
  payload: PayloadFlightsParams;
}

interface FlightsReset {
  type: FlightsActionTypes.FLIGHTS_RESET;
}

export type FlightsAction = FlightsDataRecieved | FlightsParams | FlightsReset;
