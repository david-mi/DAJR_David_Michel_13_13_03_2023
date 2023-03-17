import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { fetchStatus } from "../reducers";

const PrivateRoutes = () => {
  const retreiveProfileStatus = useSelector((({ profile }) => profile.get.status));
  const authenticated = useSelector(({ profile }) => profile.authenticated);

  switch (true) {
    case retreiveProfileStatus === fetchStatus.PENDING:
      return <h1>Chargement...</h1>;
    case authenticated:
      return <Outlet />;
    default:
      return <Navigate to="/sign-in" />;
  }
};

export default PrivateRoutes;