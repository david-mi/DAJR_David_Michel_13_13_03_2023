import { configureStore } from "@reduxjs/toolkit";
import { authSlice, profileSlice } from "./reducers";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    profile: profileSlice.reducer
  }
});

export default store;