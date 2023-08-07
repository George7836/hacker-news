import { configureStore } from "@reduxjs/toolkit";
import newsSlice from "./slices/newsSlice";
import singleNewsSlice from "./slices/singleNewsSlice";

export const store = configureStore({
  reducer: {
    news: newsSlice,
    single: singleNewsSlice
  }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;