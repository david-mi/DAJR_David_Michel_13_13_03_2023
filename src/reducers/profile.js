import { createSlice } from "@reduxjs/toolkit";
import { profileMiddleware } from "../middlewares";

export const profileStatus = {
  IDLE: "idle",
  ERROR: "error",
  PENDING: "pending"
};

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  getStatus: profileStatus.PENDING,
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  extraReducers: (profiler) => {
    profiler.addCase(profileMiddleware.pending, (state, action) => {
      state.getStatus = profileStatus.PENDING;
    });
    profiler.addCase(profileMiddleware.fulfilled, (state, { payload }) => {
      return {
        ...payload,
        getStatus: profileStatus.IDLE
      };
    });
    profiler.addCase(profileMiddleware.rejected, (state, action) => {
      return {
        ...initialState,
        getStatus: profileStatus.ERROR
      };
    });
  }
});