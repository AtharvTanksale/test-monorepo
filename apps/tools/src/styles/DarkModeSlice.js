import { createSlice } from "@camonk/react-redux";

const initialState = {
  isDarkMode: localStorage.getItem("darkMode") === "true" ? true : false,
};

export const darkModeSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.isDarkMode = !state.isDarkMode;
      localStorage.setItem("darkMode", state.isDarkMode);
    },
  },
});

export const { toggleDarkMode, checkMode } = darkModeSlice.actions;

export default darkModeSlice.reducer;
