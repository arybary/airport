import React from "react";
import { HashRouter } from "react-router-dom";
import SeachFlights from "./components/SearchFlights/SearchFlights";
import { Provider } from "react-redux";
import store from "./store";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <HashRouter>
        <div className="page">
          <SeachFlights />
        </div>
      </HashRouter>
    </Provider>
  );
};

export default App;
