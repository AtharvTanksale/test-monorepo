import "regenerator-runtime/runtime";
import { GoogleOAuthProvider } from "@camonk/auth";
import { BrowserRouter, Routes, Route } from "@camonk/router";
import {
  QueryClientProvider,
  QueryClient,
  ReactQueryDevtools,
} from "@camonk/react-query";
import { ThemeProvider, CssBaseline } from "@camonk/design-system";
import { lightTheme, darkTheme } from "./styles/ThemeProvider";
import { useSelector } from "@camonk/react-redux";
import { Toaster } from "@camonk/toast";
import AppLayout from "./layouts/AppLayout";
import "./index.css";
import {
  ResumeScorerPage,
  NotFoundPage,
  InterviewBotPage,
  SalaryEstimatorPage,
  ArticleshipScorerPage,
  EventsPage,
  EventsDetailsPage,
  LoginPage,
  HomePage,
  VerifyPhoneNumberPage,
} from "./pages";
import { ScrollToTop } from "./utils/scrollToTop";
import { PersistUser } from "@camonk/design-system/custom-components";

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
      <ReactQueryDevtools initialIsOpen={false} />
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <CssBaseline />
        <GoogleOAuthProvider clientId={GOOGLE_AUTH_CLIENT_ID}>
          <BrowserRouter>
            <ScrollToTop />
            <Routes>
              <Route element={<AppLayout />}>
                <Route element={<PersistUser />}>
                  <Route index element={<HomePage />} />
                  <Route
                    exact
                    path="interview-bot"
                    element={<InterviewBotPage />}
                  />
                  <Route
                    exact
                    path="communication-bot"
                    element={"Tools Homepage"}
                  />
                  <Route
                    exact
                    path="resume-scorer"
                    element={<ResumeScorerPage />}
                  />
                  <Route
                    exact
                    path="resume-to-jd-scorer"
                    element={"Tools Homepage"}
                  />
                  <Route
                    exact
                    path="salary-estimator"
                    element={<SalaryEstimatorPage />}
                  />
                  <Route
                    exact
                    path="articleship-scorer"
                    element={<ArticleshipScorerPage />}
                  />

                  <Route path="/events">
                    <Route index element={<EventsPage />} />
                    <Route path=":eventId" element={<EventsDetailsPage />} />
                  </Route>
                  <Route exact path="/login" element={<LoginPage />} />

                  <Route
                    exact
                    path="verify-phone-number"
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
