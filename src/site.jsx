import { createSlice } from "@reduxjs/toolkit";

export const site = createSlice({
  name: "sitee",
  initialState: {
    dark: false,
    language: "Turkish",
  },
  reducers: {
    setDarkMode: (state) => {
      state.dark = !state.dark;
    },
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});
export const {setDarkMode,setLanguage} =site.actions;
export default site.reducer;