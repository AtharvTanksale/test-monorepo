import "./index.css";
import { Toaster } from "@camonk/toast";
import { BrowserRouter, Routes, Route, Navigate } from "@camonk/router";
import { useSelector } from "@camonk/react-redux";
import { QueryClientProvider, QueryClient } from "@camonk/react-query";
import { ThemeProvider, CssBaseline } from "@camonk/design-system";
import { lightTheme, darkTheme } from "./styles/ThemeProvider";
import DashboardLayout from "./layouts/DashboardLayout";
import {
  ArticleshipScorerPage,
  CommunicationBotPage,
  EventsPage,
  DashboardPage,
  InterviewBotPage,
  ResumeScorerPage,
  ResumeToJdScorerPage,
  SalaryEstimatorPage,
  UsersPage,
  NotFoundPage,
  LoginPage,
  VerifyPhoneNumberPage,
} from "./pages";
import { GoogleOAuthProvider } from "@camonk/auth";
import { PersistUser } from "@camonk/design-system/custom-components";
import UserPaymentHistory from "./components/users/UserPaymentHistory";
import UserDetailLayout from "./layouts/UserDetailLayout";
import UserDetails from "./components/users/UserDetails";

function App() {
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 0,
      },
    },
  });

  const GOOGLE_AUTH_CLIENT_ID = import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID;

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <CssBaseline />
        <GoogleOAuthProvider clientId={GOOGLE_AUTH_CLIENT_ID}>
          <BrowserRouter>
            <Routes>
              <Route element={<DashboardLayout />}>
                <Route element={<PersistUser />}>
                  <Route index element={<Navigate replace to="dashboard" />} />
                  <Route exact path="/dashboard" element={<DashboardPage />} />
                  <Route
                    exact
                    path="/dashboard/events"
                    element={<EventsPage />}
                  />
                  <Route
                    exact
                    path="/dashboard/users"
                    element={<UsersPage />}
                  />
                  <Route
                    exact
                    path="/dashboard/users/:userId"
                    element={<UserDetailLayout />}
                  >
                    <Route exact path="details" element={<UserDetails />} />
                    <Route
                      exact
                      path="payment-history"
                      element={<UserPaymentHistory />}
                    />
                  </Route>

                  <Route
                    exact
                    path="/dashboard/interview-bot"
                    element={<InterviewBotPage />}
                  />
                  <Route
                    exact
                    path="/dashboard/communication-bot"
                    element={<CommunicationBotPage />}
                  />
                  <Route
                    exact
                    path="/dashboard/resume-scorer"
                    element={<ResumeScorerPage />}
                  />
                  <Route
                    exact
                    path="/dashboard/resume-to-jd-scorer"
                    element={<ResumeToJdScorerPage />}
                  />
                  <Route
                    exact
                    path="/dashboard/salary-estimator"
                    element={<SalaryEstimatorPage />}
                  />
                  <Route
                    exact
                    path="/dashboard/articleship-scorer"
                    element={<ArticleshipScorerPage />}
                  />

                  <Route exact path="/login" element={<LoginPage />} />

                  <Route
                    exact
                    path="/verify-phone-number"
                    element={<VerifyPhoneNumberPage />}
                  />
                  <Route exact path="*" element={<NotFoundPage />} />
                </Route>
              </Route>
            </Routes>
          </BrowserRouter>
        </GoogleOAuthProvider>
      </ThemeProvider>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "var(--color-grey-0)",
            color: "var(--color-grey-700)",
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
