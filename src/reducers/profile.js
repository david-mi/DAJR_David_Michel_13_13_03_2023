import { createSlice } from "@reduxjs/toolkit";
import { getProfileMiddleware, editProfileMiddleware } from "../middlewares";

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

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    reset() {
      return initialState;
    }
  },
  extraReducers: (profiler) => {
    profiler.addCase(getProfileMiddleware.pending, (state, action) => {
      state.getStatus = profileStatus.PENDING;
    });
    profiler.addCase(getProfileMiddleware.fulfilled, (state, { payload }) => {
      return {
        ...payload,
        getStatus: profileStatus.IDLE
      };
    });
    profiler.addCase(getProfileMiddleware.rejected, (state, action) => {
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

export const profileReducer = profileSlice.reducer;
export const resetProfile = profileSlice.actions.reset;