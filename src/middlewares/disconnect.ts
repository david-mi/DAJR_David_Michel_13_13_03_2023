import { actions } from "../reducers/profile/profile";
import { deleteStorageToken } from "../utils";
import { AppThunkDispatch } from "./types";

/**
 * - Dispatch disconnect action to reset user profile infos from the store
 * - Remove authentification token from local/session storage
 */

export const disconnectMiddleware = (dispatch: AppThunkDispatch) => {
  dispatch(actions.disconnect());
  deleteStorageToken();
};