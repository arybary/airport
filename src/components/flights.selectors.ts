import moment from "moment";
import { createSelector } from "reselect";
import { RootState } from "../store";

export const fligthDataSelector = (state: RootState) =>
  state.flights.flightsData;

export const directionSelector = (state: RootState) => state.flights.direction;

export const valueSelector = (state: RootState) => state.flights.value;

export const dateSelector = (state: RootState) => state.flights.date;

export const fligthsList = createSelector(
  [fligthDataSelector, valueSelector, directionSelector],
  (flights, value, direction) => {
    if (direction === "") {
      return flights;
    }
    const flightsDataList = flights[direction].map((data: any) => ({
      id: data.ID,
      terminal: data.term,
      time: data.actual,
      destination: data["airportToID.name_en"] || data["airportFromID.name_en"],
      status: `${data.status} to ${moment(data.timeTakeofFact).format("LT")}`,
      airline: data.airline,
      code: data.codeShareData[0].codeShare,
    }));

    const searchInput = (str: string) =>
      str.toUpperCase().includes(value.toUpperCase());

    const flightsDataListFilter = !value
      ? flightsDataList
      : flightsDataList.filter((flight: any) => {
          const { destination, airline, code } = flight;
          return (
            searchInput(destination) ||
            searchInput(airline.en.name) ||
            searchInput(code)
          );
        });
    return flightsDataListFilter;
  }
);
