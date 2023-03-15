import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { fetchStatus } from "../reducers";

const PrivateRoutes = () => {
  const status = useSelector((({ profile }) => profile.get.status));

  switch (status) {
    case fetchStatus.PENDING:
      return <h1>Chargement...</h1>;
    case fetchStatus.FAILED:
      return <Navigate to="/sign-in" />;
    case fetchStatus.IDLE:
      return <Outlet />;
  }
};

export default PrivateRoutes;