import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { userStatus } from "../reducers/auth";
import { Navigate } from "react-router-dom";

const PrivateRoutes = () => {
  const status = useSelector(((store) => store.auth.status));

  switch (status) {
    case userStatus.PENDING:
      return <h1>Chargement...</h1>;
    case userStatus.DISCONNECTED:
      return <Navigate to="/sign-in" />;
    case userStatus.CONNECTED:
      return <Outlet />;
  }
};

export default PrivateRoutes;