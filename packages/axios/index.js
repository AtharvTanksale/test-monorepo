import axiosInstance from "axios";
import { jwtDecode } from "jwt-decode";

import { clearUser, setToken } from "@camonk/auth/authSlice";

let store;

export const injectStore = (_store) => {
  store = _store;
};

const BASE_URL = import.meta.env.VITE_AUTH_API_URL;

export const axios = axiosInstance.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

// use this refresh function instead of refresh function from auth file
// as calling refresh function from auth file will end up in a loop and will freeze the app
// this uses different axios instance to call refresh endpoint
export const refresh = async () => {
  const response = await axiosInstance.post(
    `${BASE_URL}/auth/refresh`,
    {},
    { withCredentials: true }
  );
  return response.data;
};

// interceptor for calling refresh endpoint when token expires
axios.interceptors.request.use(async (config) => {
  // check if this request is for login or register endpoint
  // if yes, then return config without any changes
  if (
    config.url === "/auth/login" ||
    config.url === "/auth/register" ||
    config.url === "/auth/google"
  ) {
    return config;
  }

  const token = store.getState().auth.accessToken;
  if (token) {
    const decoded = jwtDecode(token);
    if (decoded.exp) {
      const expiresIn = decoded.exp * 1000 - Date.now();
      if (expiresIn <= 0) {
        // call refresh token endpoint as token is expired
        // console.log("token expired");
        await refreshingToken(config);
      } else {
        // token is still valid
        // console.log("token is still valid");
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
  } else {
    // here token is not available in redux store, this happens when page is refreshed
    // call refresh token endpoint to get new token
    // await refreshingToken(config);
  }
  return config;
});

const refreshingToken = async (config) => {
  try {
    const response = await refresh();
    if (response.data) {
      config.headers.Authorization = `Bearer ${response.data.accessToken}`;

      // set new token in redux store
      store.dispatch(setToken(response.data.accessToken));
    }
  } catch (error) {
    console.error(error);

    if (error.response?.status === 401) {
      // if response status is 401, it means refresh token is also expired
      // redirect user to login page
      if (window.location.pathname !== "/login") {
        window.location.href = "/login"; // Redirect to your login page route
      }

      // clear token from redux store
      store.dispatch(clearUser());

      // clear token from axios headers
      delete axios.defaults.headers.common["Authorization"];

      return Promise.reject(error);
    }

    // return rejected promise to stop the request
    return Promise.reject(error);
  }
};
