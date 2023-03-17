import { actions } from "../reducers/profile/profile";
import { deleteStorageToken } from "../utils";

export const disconnectMiddleware = (dispatch) => {
  dispatch(actions.disconnect());
  deleteStorageToken();
};