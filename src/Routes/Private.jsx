import { useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { profileStatus } from "../reducers/profile";
import { getProfileMiddleware } from "../middlewares";

const PrivateRoutes = () => {
  const status = useSelector(((store) => store.profile.getStatus));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfileMiddleware());
  }, []);

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