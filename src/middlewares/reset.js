import { resetAuth, resetProfile } from "../reducers";

export const disconnectMiddleware = (dispatch) => {
  dispatch(resetProfile());
  localStorage.removeItem("token");
};