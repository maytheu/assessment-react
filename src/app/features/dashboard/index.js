import { useLoadFlightQuery } from "../../store/flightApi";

const Dashboard = () => {
  const { data: flight, isError, isSuccess, isLoading } = useLoadFlightQuery();

  console.log(flight, isError, isSuccess, isLoading);

  return <>{isLoading ? "Loading..." : isError ? "Error occured" : "data"}</>;
};

export default Dashboard;
