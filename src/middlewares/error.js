import { disconnectMiddleware } from "./disconnect";

/**
 * Custom class to use for when user has no authentification token
 */

export class MissingTokenError extends Error {
  constructor(message) {
    super(message);
    this.name = "MissingToken";
  }
}

/**
 * Handle reject action when getting error from another middleware
 * 
 * if error has a 401 status or user doesn't have any authentification
 * token stored, calls {@link disconnectMiddleware}
 * 
 * @param {error} error retrieved error
 * @param {(string) => } rejectAction reject action to call
 */

export const errorMiddleware = (error, rejectAction) => async (dispatch) => {
  await dispatch(rejectAction(error.message || "An error has occured"));

  if (error.status === 401 || error instanceof MissingTokenError) {
    dispatch(disconnectMiddleware);
  }
};
