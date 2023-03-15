import { createSlice } from "@reduxjs/toolkit";
import { getProfileMiddleware, editProfileMiddleware, authMiddleware } from "../middlewares";

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
  editStatus: profileStatus.IDLE,
  loginStatus: profileStatus.IDLE
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
    profiler.addCase(authMiddleware.pending, (state, action) => {
      state.loginStatus = profileStatus.PENDING;
    });
    profiler.addCase(authMiddleware.fulfilled, (state, action) => {
      state.loginStatus = profileStatus.IDLE;
    });
    profiler.addCase(authMiddleware.rejected, (state, action) => {
      return { ...initialState };
    });
    profiler.addCase(getProfileMiddleware.pending, (state, action) => {
      state.getStatus = profileStatus.PENDING;
    });
    profiler.addCase(getProfileMiddleware.fulfilled, (state, { payload }) => {
      return {
        ...state,
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
      state.firstName = payload.firstName;
      state.lastName = payload.lastName;
    });
    profiler.addCase(editProfileMiddleware.rejected, (state, action) => {
      state.editStatus = profileStatus.ERROR;
    });
  }
});

export const profileReducer = profileSlice.reducer;
export const resetProfile = profileSlice.actions.reset;
