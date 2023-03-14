import { resetAuth, resetProfile } from "../reducers";

export const disconnectMiddleware = (dispatch) => {
  dispatch(resetAuth());
  dispatch(resetProfile());
  localStorage.removeItem("token");
};