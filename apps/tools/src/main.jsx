import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "@camonk/react-redux";
import App from "./App.jsx";
import { store } from "../store.js";
import { ErrorBoundary } from "@camonk/error-boundary";
import { ErrorFallback } from "./pages";

// import { injectStore } from "../src/api";
import { injectStore } from "@camonk/axios";
injectStore(store);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => window.location.replace("/")}
    >
      <Provider store={store}>
        <App />
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>
);
