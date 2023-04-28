import {  useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const Protected = ({ children }) => {
  const user = useSelector((state) => state.auth.user);
  let location = useLocation();

  console.log(user);
  if (!user)
    return (
      <>
        <Navigate to={"/login"} state={{ from: location }} replace />
      </>
    );
  return <>{children}</>;
};

export default Protected;
