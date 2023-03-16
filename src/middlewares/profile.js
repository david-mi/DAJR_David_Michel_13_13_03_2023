import { createAsyncThunk } from "@reduxjs/toolkit";
import { userService } from "../Services/User/User";
import { getStorageTokenOrThrow } from "../utils";

export const getProfileMiddleware = createAsyncThunk("user/profile/get", async () => {
  const token = getStorageTokenOrThrow();
  return await userService.getProfile(token);
});

export const editProfileMiddleware = createAsyncThunk("user/profile/edit", async (payload) => {
  const token = getStorageTokenOrThrow();
  return await userService.editProfile({ ...payload }, token);
});