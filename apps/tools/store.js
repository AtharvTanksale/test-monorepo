import { configureStore } from "@camonk/react-redux";
import authReduer from "@camonk/auth/authSlice";
// import authReduer from "./src/components/authentication/authSlice";
import darkModeReducer from "./src/styles/DarkModeSlice";
import interviewBotReducer from "./src/components/interview-bot/InterviewBotSlice";

export const store = configureStore({
  reducer: {
    auth: authReduer,
    darkMode: darkModeReducer,
    interviewBot: interviewBotReducer,
  },
});
