import { actions } from "../reducers/profile/profile";
import { deleteStorageToken } from "../utils";

/**
 * - Dispatch disconnect action to reset user profile infos from the store
 * - Remove authentification token from local/session storage
 * 
 * @param {*} dispatch 
 */

export const disconnectMiddleware = (dispatch) => {
  dispatch(actions.disconnect());
  deleteStorageToken();
};