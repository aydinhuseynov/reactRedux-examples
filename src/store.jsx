import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import siteReducer from './site';
export const store = configureStore({
  reducer: {
    abc: counterReducer,
    site:siteReducer,
  },
});
