import { createSlice } from "@reduxjs/toolkit";
import { authMiddleware } from "../middlewares";

export const userStatus = {
  CONNECTED: "connected",
  DISCONNECTED: "disconnected",
  PENDING: "pending"
};

const initialState = {
  status: userStatus.DISCONNECTED,
  token: null
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset() {
      return initialState;
    }
  },
  extraReducers: (profiler) => {
    profiler.addCase(authMiddleware.pending, (state, action) => {
      state.status = userStatus.PENDING;
    });
    profiler.addCase(authMiddleware.fulfilled, (state, action) => {
      state.status = userStatus.CONNECTED;
      state.token = action.payload;
    });
    profiler.addCase(authMiddleware.rejected, (state, action) => {
      return { ...initialState };
    });
  }
});

export const authReducer = authSlice.reducer;
export const resetAuth = authSlice.actions.reset;