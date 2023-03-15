import { createSlice } from "@reduxjs/toolkit";
import { getProfileMiddleware, editProfileMiddleware, authMiddleware } from "../../middlewares";
import { initialState } from "./initialState";
import { fetchStatus } from "../enums";

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    reset() {
      return initialState;
    }
  },
  extraReducers: (profiler) => {
    profiler.addCase(authMiddleware.pending, (state) => {
      state.login.status = fetchStatus.PENDING;
      state.login.error = null;
    });
    profiler.addCase(authMiddleware.fulfilled, (state) => {
      state.login.status = fetchStatus.IDLE;
    });
    profiler.addCase(authMiddleware.rejected, (state, { error }) => {
      state.login.status = fetchStatus.FAILED;
      state.login.error = "Echec du login";
    });
    profiler.addCase(getProfileMiddleware.pending, (state) => {
      state.get = initialState.get;
      state.authenticated = false;
    });
    profiler.addCase(getProfileMiddleware.fulfilled, (state, { payload }) => {
      return {
        ...state,
        ...payload,
        get: {
          status: fetchStatus.IDLE,
        },
        authenticated: true
      };
    });
    profiler.addCase(getProfileMiddleware.rejected, (state, { error }) => {
      return {
        ...initialState,
        get: {
          status: fetchStatus.FAILED,
          error: "Echec de la récupération du profil"
        }
      };
    });
    profiler.addCase(editProfileMiddleware.pending, (state) => {
      state.edit.status = fetchStatus.PENDING;
      state.edit.error = null;
    });
    profiler.addCase(editProfileMiddleware.fulfilled, (state, { payload }) => {
      state.firstName = payload.firstName;
      state.lastName = payload.lastName;
      state.edit = initialState.edit;
    });
    profiler.addCase(editProfileMiddleware.rejected, (state, { error }) => {
      state.edit = {
        state: fetchStatus.FAILED,
        error: "Echec de l'édition du profil"
      };
    });
  }
});

export const profileReducer = profileSlice.reducer;
export const resetProfile = profileSlice.actions.reset;
