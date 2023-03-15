import { createAsyncThunk } from "@reduxjs/toolkit";
import { userService } from "../Services/User/User";
import { getProfileMiddleware } from "./profile";

export const authMiddleware = createAsyncThunk("user/profile/login", async (payload, { dispatch }) => {
  const token = await userService.login(payload);
  localStorage.setItem("token", token);
  dispatch(getProfileMiddleware());
});