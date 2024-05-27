import { configureStore } from "@camonk/react-redux";
import darkModeReducer from "./src/styles/DarkModeSlice";
import eventsDashboardReducer from "./src/components/events/EventsDashboardSlice";
import authReduer from "@camonk/auth/authSlice";

export const store = configureStore({
  reducer: {
    auth: authReduer,
    darkMode: darkModeReducer,
    eventsDashboard: eventsDashboardReducer,
  },
});
