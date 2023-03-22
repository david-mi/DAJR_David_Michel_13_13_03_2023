import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { fetchStatus } from "../enums";
import Loading from "../Pages/Loading/Loading";

/**
 * Handling private routes
 * 
 * - if profile is being fetched, return a waiting screen
 * - if user is authenticated, return {@link Outlet}
 * - redirect to sign-in page by default
 * 
 */

const PrivateRoutes = () => {
  const retreiveProfileStatus = useSelector((({ profile }) => profile.get.status));
  const authenticated = useSelector(({ profile }) => profile.authenticated);

  switch (true) {
    case retreiveProfileStatus === fetchStatus.PENDING:
      return <Loading />;
    case authenticated:
      return <Outlet />;
    default:
      return <Navigate to="/login" />;
  }
};

export default PrivateRoutes;