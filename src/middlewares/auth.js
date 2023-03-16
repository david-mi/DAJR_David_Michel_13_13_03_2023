import { createAsyncThunk } from "@reduxjs/toolkit";
import { userService } from "../Services/User/User";
import { getProfileMiddleware } from "./profile";
import { setStorageToken } from "../utils";

export const authMiddleware = createAsyncThunk("user/profile/login", async (payload, { dispatch }) => {
  const token = await userService.login(payload);
  setStorageToken(token);
  dispatch(getProfileMiddleware(token));
});