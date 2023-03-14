import { configureStore } from "@reduxjs/toolkit";
import { authReducer, profileReducer } from "./reducers";

const store = configureStore({
  reducer: {
    auth: authReducer,
    profile: profileReducer
  }
});

export default store;