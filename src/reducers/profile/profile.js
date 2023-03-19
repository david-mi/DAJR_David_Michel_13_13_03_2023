import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import { fetchStatus } from "../../enums";

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    disconnect(state, { payload }) {
      if (payload && payload in initialState) {
        state.edit = initialState[payload];
        return;
      }

      return {
        ...initialState,
        hasDisconnected: true,
        get: {
          status: fetchStatus.IDLE,
          error: null
        },
      };
    },
    loginPending(state) {
      state.login.status = fetchStatus.PENDING;
      state.login.error = null;
      state.hasDisconnected = false;
    },
    loginFulfilled(state) {
      state.login.status = fetchStatus.IDLE;
    },
    loginRejected(state, { payload }) {
      state.login.status = fetchStatus.FAILED;
      state.login.error = payload;
    },
    getPending(state) {
      state.get = initialState.get;
      state.authenticated = false;
    },
    getFulfilled(state, { payload }) {
      return {
        ...state,
        ...payload,
        get: {
          status: fetchStatus.IDLE,
          error: null
        },
        authenticated: true
      };
    },
    getRejected(state, { payload }) {
      return {
        ...initialState,
        get: {
          status: fetchStatus.FAILED,
          error: payload
        }
      };
    },
    editPending(state) {
      state.edit.status = fetchStatus.PENDING;
      state.edit.error = null;
    },
    editFulfilled(state, { payload }) {
      state.firstName = payload.firstName;
      state.lastName = payload.lastName;
      state.edit = initialState.edit;
    },
    editRejected(state, { payload }) {
      state.edit = {
        status: fetchStatus.FAILED,
        error: payload
      };
    }
  },
});

export const profileReducer = profileSlice.reducer;
export const actions = profileSlice.actions;
