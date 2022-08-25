import authSlices from "./authSlices";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    auth: authSlices.reducer,
  },
});
