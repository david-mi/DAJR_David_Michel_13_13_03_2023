import { createSlice } from "@reduxjs/toolkit";
import { profileMiddleware } from "../middlewares";

export const profileStatus = {
  RETRIEVED: "retrieved",
  ERROR: "error",
  PENDING: "pending"
};

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  status: profileStatus.PENDING
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  extraReducers: (profiler) => {
    profiler.addCase(profileMiddleware.pending, (state, action) => {
      state.status = profileStatus.PENDING;
    });
    profiler.addCase(profileMiddleware.fulfilled, (state, { payload }) => {
      return {
        ...payload,
        status: profileStatus.RETRIEVED
      };
    });
    profiler.addCase(profileMiddleware.rejected, (state, action) => {
      return {
        ...initialState,
        status: profileStatus.ERROR
      };
    });
  }
});