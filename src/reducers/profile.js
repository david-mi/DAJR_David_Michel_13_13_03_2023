import { createSlice } from "@reduxjs/toolkit";
import { profileMiddleware, editProfileMiddleware } from "../middlewares";

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
  editStatus: profileStatus.IDLE
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
    profiler.addCase(editProfileMiddleware.pending, (state, action) => {
      state.editStatus = profileStatus.PENDING;
    });
    profiler.addCase(editProfileMiddleware.fulfilled, (state, { payload }) => {
      return {
        ...payload,
        editStatus: profileStatus.IDLE
      };
    });
    profiler.addCase(editProfileMiddleware.rejected, (state, action) => {
      state.editStatus = profileStatus.ERROR;
    });
  }
});