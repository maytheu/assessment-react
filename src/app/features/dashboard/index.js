import { useLoadFlightQuery } from "../../store/flightApi";
import { Table } from "../../common/sharedComponent";

const Dashboard = () => {
  const { data: flight, isError,  isLoading } = useLoadFlightQuery();
  const columns = [
    { Header: "departure airpoort", accessor: "estDepartureAirport" },
    { Header: "departure time", accessor: "firstSeen" },
    { Header: "arrival airpoort", accessor: "estArrivalAirport" },
    { Header: "arrival time", accessor: "lastSeen" },
    { Header: "departure count", accessor: "departureAirportCandidatesCount" },
    { Header: "arrival count", accessor: "arrivalAirportCandidatesCount" },
  ];


  return (
    <>
      {isLoading ? (
        "Loading..."
      ) : isError ? (
        "Error occured"
      ) : (
        <>
          <Table
            {...{
              columns,
              data: flight,
            }}
          />
        </>
      )}
    </>
  );
};

export default Dashboard;
