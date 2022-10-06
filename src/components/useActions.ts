import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as FlightsActionCreators from "./flights.actions";

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(FlightsActionCreators, dispatch);
};
