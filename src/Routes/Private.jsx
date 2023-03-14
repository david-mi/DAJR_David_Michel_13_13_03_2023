import { useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { profileStatus } from "../reducers/profile";
import { getProfileMiddleware } from "../middlewares";
import { disconnectMiddleware } from "../middlewares/reset";

const PrivateRoutes = () => {
  const status = useSelector(((store) => store.profile.getStatus));
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === profileStatus.PENDING) {
      dispatch(getProfileMiddleware());
    }
  }, [status]);

  switch (status) {
    case profileStatus.PENDING:
      return <h1>Chargement...</h1>;
    case profileStatus.ERROR:
      return <Navigate to="/sign-in" />;
    case profileStatus.IDLE:
      return <Outlet />;
  }
};

export default PrivateRoutes;