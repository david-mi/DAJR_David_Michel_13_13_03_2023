import { userService } from "../Services/User/User";
import { getStorageTokenOrThrow, setStorageToken } from "../utils";
import { errorMiddleware } from "./";
import { actions } from "../reducers/profile/profile";

/**
 * - Handle dispatchs and services calls for user login
 * - if request succeeds, dispatch {@link getProfileMiddleware}
 * - if request fails or authentification token is missing, dispatch {@link errorMiddleware}
 * 
 * @param {Object} payload 
 * @param {string} payload.email
 * @param {string} payload.password
 * @param {boolean} payload.remember decide to store token on local or session storage
 */

export const authMiddleware = (payload) => async (dispatch) => {
  try {
    const { remember, ...dataToSend } = payload;
    dispatch(actions.loginPending());
    const token = await userService.login(dataToSend);
    setStorageToken(token, remember);
    dispatch(actions.loginFulfilled());
  } catch (error) {
    return dispatch(errorMiddleware(error, actions.loginRejected));
  }

  dispatch(getProfileMiddleware);
};

/**
 * - Handle dispatchs and services calls to retrieve user profile data
 * - if request fails or authentification token is missing, dispatch {@link errorMiddleware}
 * 
 */

export async function getProfileMiddleware(dispatch) {
  try {
    const token = getStorageTokenOrThrow();
    dispatch(actions.getPending());
    const profileData = await userService.getProfile(token);
    dispatch(actions.getFulfilled(profileData));
  } catch (error) {
    dispatch(errorMiddleware(error, actions.getRejected));
  }
}


/**
 * - Handle dispatchs and services calls to edit user's profile
 * - if request fails or authentification token is missing, dispatch {@link errorMiddleware}
 * 
 * @param {Object} payload 
 * @param {string} payload.email
 * @param {string} payload.password
 */

export const editProfileMiddleware = (payload) => async (dispatch) => {
  try {
    const token = getStorageTokenOrThrow();
    dispatch(actions.editPending());
    const profileData = await userService.editProfile({ ...payload }, token);
    await dispatch(actions.editFulfilled(profileData));
    return true;
  } catch (error) {
    dispatch(errorMiddleware(error, actions.editRejected));
  }
};