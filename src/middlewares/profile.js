import { createAsyncThunk } from "@reduxjs/toolkit";
import { userService } from "../Services/User/User";
import { authMiddleware } from "./auth";

export const getProfileMiddleware = createAsyncThunk("user/profile/get", async (_, { dispatch }) => {
  try {
    const data = await userService.getProfile();
    const tokenStorage = localStorage.getItem("token");
    await dispatch(authMiddleware.fulfilled(tokenStorage));
    return data;
  } catch (error) {
    return Promise.reject("erreur");
  }
});

export const editProfileMiddleware = createAsyncThunk("user/profile/edit", async (payload) => {
  return await userService.editProfile({ ...payload });
});