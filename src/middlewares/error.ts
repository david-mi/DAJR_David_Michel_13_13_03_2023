import { disconnectMiddleware } from "./disconnect";
import type { AppThunk } from "./types";
import { MissingTokenError, FetchError } from "../CustomErrors";

/**
 * Handle reject action when getting error from another middleware
 * 
 * if error got a 401 status or user doesn't have any authentification
 * token stored, calls {@link disconnectMiddleware}
 * 
 * @param error retrieved error
 * @param rejectAction reject action to call
*/

type ErrorMiddleware = (error: unknown, rejectAction: (message: string) => any) => AppThunk

export const errorMiddleware: ErrorMiddleware = (error, rejectAction) => {
  return async (dispatch) => {
    const { message, status } = error as FetchError
    await dispatch(rejectAction(message || "An error has occured"));

    if (status === 401 || error instanceof MissingTokenError) {
      dispatch(disconnectMiddleware);
    }
  }
};
