import {
  createStore,
  applyMiddleware,
  combineReducers,
  compose,
  Middleware,
} from "redux";
import thunk from "redux-thunk";
import flightsReduser from "./components/flights.reducer";
import { FlightsAction } from "./components/flights.type";

const rootReduser = combineReducers({ flights: flightsReduser });

const logger: Middleware<{}, RootState> =
  (state: any) => (next: any) => (action: FlightsAction) => {
    console.group(action.type);
    console.info("dispatching", action);
    let result = next(action);
    console.log("next state", store.getState());
    console.groupEnd();
    return result;
  };

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export type RootState = ReturnType<typeof rootReduser>;

const store = createStore(
  rootReduser,
  composeEnhancers(applyMiddleware(thunk, logger))
);

export default store;
