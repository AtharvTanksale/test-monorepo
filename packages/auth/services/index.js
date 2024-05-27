import { toast } from "@camonk/toast";
import { axios } from "@camonk/axios";

// const AUTH_API_URL = import.meta.env.VITE_AUTH_API_URL;

export async function signUp({
  firstName,
  lastName,
  email,
  password,
  phoneNumber,
}) {
  const toastId = toast.loading("Registering...");
  try {
    const response = await axios.post(`/auth/register`, {
      firstName,
      lastName,
      email,
      password,
      phoneNumber,
    });

    const data = response.data;

    toast.success("Registerd Successfully!", {
      id: toastId,
    });

    return data;
  } catch (error) {
    toast.error(`Registration Failed!`, {
      id: toastId,
    });

    throw new Error(`Registration failed Err: ${error.response.data.message}`);
  }
}

export async function login({ email, password }) {
  const toastId = toast.loading("Logging in...");
  try {
    const response = await axios.post(`/auth/login`, {
      email,
      password,
    });
    const data = response.data;

    toast.success("Logged In Successfully!", {
      id: toastId,
    });

    return data;
  } catch (error) {
    toast.error(`Login Attempt Failed!`, {
      id: toastId,
    });
    throw new Error("Login failed");
  }
}

export async function googleLogin(accessToken) {
  const toastId = toast.loading("Logging in...");

  try {
    const response = await axios.post(`/auth/google`, {
      accessToken: accessToken,
    });
    const data = response.data;

    toast.success("Logged In Successfully!", {
      id: toastId,
    });

    return data;
  } catch (error) {
    toast.error(`Login Attempt Failed!`, {
      id: toastId,
    });
    throw new Error("Login failed");
  }
}

export async function updatePhoneNumber({ phone }) {
  const toastId = toast.loading("Sending otp...");

  try {
    const response = await axios.post("/user/phone", {
      phone,
    });

    const data = response.data;

    toast.success("Otp sent!", {
      id: toastId,
    });

    return data;
  } catch (error) {
    toast.error(`Could not sent otp! Try again later!`, {
      id: toastId,
    });

    throw new Error(`could not send otp ${error.response.data.message}`);
  }
}

export async function verifyPhoneNumber({ phone, otp, otpSessionId }) {
  const toastId = toast.loading("Verifying otp...");

  try {
    const response = await axios.post("/user/verifyphone", {
      phone,
      otp,
      otpSessionId,
    });

    const data = response.data;

    toast.success("Otp verified!!", {
      id: toastId,
    });

    return data;
  } catch (error) {
    toast.error(`Could not verify otp!`, {
      id: toastId,
    });

    throw new Error(`Could not verify otp ${error.response.data.message}`);
  }
}

export async function refreshToken() {
  try {
    const response = await axios.post("/auth/refresh");
    const data = response.data;
    return data;
  } catch (error) {
    throw new Error("Could not refresh token");
  }
}

export async function logout() {
  const toastId = toast.loading("Logging out...");
  try {
    const response = await axios.post(`/auth/logout`);

    toast.success("Logged out!", {
      id: toastId,
    });

    const data = response.data;

    return data;
  } catch (error) {
    toast.error(`Logout Attempt Failed!`, {
      id: toastId,
    });

    throw new Error("logout attempt failed");
  }
}

export async function getUser() {
  try {
    const response = await axios.get("/user/me");
    const data = response.data;

    return data;
  } catch (error) {
    console.error(error);
  }
}
