import { fetchStatus } from "../enums";

export const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  get: {
    status: fetchStatus.IDLE,
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
  hasDisconnected: false
};