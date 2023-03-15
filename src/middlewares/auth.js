import { createAsyncThunk } from "@reduxjs/toolkit";
import { userService } from "../Services/User/User";

export const authMiddleware = createAsyncThunk("user/profile/login", async (payload) => {
  const token = await userService.login(payload);
  localStorage.setItem("token", token);
  return token;
});