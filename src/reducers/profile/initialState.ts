import { fetchStatus } from "../../enums";

export const initialState = {
  firstName: "",
  lastName: "",
  get: {
    status: fetchStatus.PENDING,
    error: null
  },
  edit: {
    status: fetchStatus.IDLE,
    error: null
  },
  login: {
    status: fetchStatus.IDLE,
    error: null
  },
  authenticated: false,
};