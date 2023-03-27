import { userService } from "../Services/User/User";
import { getStorageTokenOrThrow, setStorageToken } from "../utils";
import { errorMiddleware } from ".";
import { actions } from "../reducers/profile/profile";
import type { AuthPayload } from "../Pages/Login/Login";
import type { ProfileEditPayload } from "../Pages/Profile/Profile";
import type { AppThunk, AppThunkDispatch } from "./types";

/**
 * - Handle dispatchs and services calls for user login
 * - if request succeeds, dispatch {@link getProfileMiddleware}
 * - if request fails or authentification token is missing, dispatch {@link errorMiddleware}
 */

export const authMiddleware = (payload: AuthPayload): AppThunk => {
  return async (dispatch) => {
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
}

/**
 * - Handle dispatchs and services calls to retrieve user profile data
 * - if request fails or authentification token is missing, dispatch {@link errorMiddleware}
 * 
 */

export async function getProfileMiddleware(dispatch: AppThunkDispatch) {
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
 */

export const editProfileMiddleware = (payload: ProfileEditPayload): AppThunk => {
  return async (dispatch) => {
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
}

