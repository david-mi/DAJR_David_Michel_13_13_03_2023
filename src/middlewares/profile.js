import { createAsyncThunk } from "@reduxjs/toolkit";
import { userService } from "../Services/User/User";
import { authMiddleware } from "./auth";

export const profileMiddleware = createAsyncThunk("user/profile/get", async (_, { dispatch }) => {
  try {
    const data = await userService.getProfile();
    return data;
  } catch (error) {
    dispatch(authMiddleware.rejected("disconnected"));
    localStorage.removeItem("token");
    return Promise.reject("erreur");
  }
});

export const editProfileMiddleware = createAsyncThunk("user/profile/edit", async (payload) => {
  return await userService.editProfile({ ...payload });
});