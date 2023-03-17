import { disconnectMiddleware } from "./disconnect";

export class MissingTokenError extends Error {
  constructor(message) {
    super(message);
    this.name = "MissingToken";
  }
}

export const errorMiddleware = (error, rejectAction) => async (dispatch) => {
  await dispatch(rejectAction(error.message || "An error has occured"));

  if (error.status === 401 || error instanceof MissingTokenError) {
    dispatch(disconnectMiddleware);
  }
};
