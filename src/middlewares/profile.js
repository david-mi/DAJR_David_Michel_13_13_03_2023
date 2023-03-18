import { userService } from "../Services/User/User";
import { getStorageTokenOrThrow, setStorageToken } from "../utils";
import { errorMiddleware } from "./";
import { actions } from "../reducers/profile/profile";

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