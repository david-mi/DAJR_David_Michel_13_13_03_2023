import type { ThunkAction, AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import type { RootState } from "../store";

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AnyAction
>

export type AppThunkDispatch = ThunkDispatch<
  RootState,
  unknown,
  AnyAction
>