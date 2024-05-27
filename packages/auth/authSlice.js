import { createSlice } from "@camonk/react-redux";

const initialState = {
  accessToken: null,
  otpSessionId: null,
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.accessToken = action.payload;
    },

    setUser: (state, action) => {
      state.user = action.payload;
    },

    setPhoneOtpSessionId: (state, action) => {
      state.otpSessionId = action.payload;
    },

    clearUser: () => initialState,
  },
});

export const { setToken, setUser, setPhoneOtpSessionId, clearUser } =
  authSlice.actions;

export default authSlice.reducer;
