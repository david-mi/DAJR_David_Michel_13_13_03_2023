import { createAsyncThunk } from "@reduxjs/toolkit";
import { userService } from "../Services/User/User";

export const getProfileMiddleware = createAsyncThunk("user/profile/get", async () => {
  return await userService.getProfile();
});

export const editProfileMiddleware = createAsyncThunk("user/profile/edit", async (payload) => {
  return await userService.editProfile({ ...payload });
});