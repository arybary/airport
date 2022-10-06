import { fligthsList } from "../../flights.selectors";
import { useTypedSelector } from "../../useTypedSelector";
import RowFlight from "./RowFlight";
import "./TableFlights.scss";

const TableFlights: React.FC = () => {
  const flights = useTypedSelector(fligthsList);

  return (
    <>
      {flights.length === 0 ? (
        <div className="title__flight-no">No flights...</div>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>Terminal</th>
              <th>Local time</th>
              <th>Destination</th>
              <th>Status</th>
              <th>Airline</th>
              <th className="td-hiden">Flight</th>
            </tr>
          </thead>
          <tbody>
            {flights.map((flight: any) => (
              <RowFlight key={flight.id} {...flight} />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default TableFlights;
