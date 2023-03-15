import { useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";
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