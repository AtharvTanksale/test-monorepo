import { axios } from "@camonk/axios";
import { toast } from "@camonk/toast";

export async function getUsers() {
  try {
    const response = await axios.get("/user/all");
    const data = response.data.data;

    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function getUserById(userId) {
  try {
    const response = await axios.get(`/user/${userId}`);
    const data = response.data.data;

    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function updateUserById(userId, userData) {
  const toastId = toast.loading("Updating User...");

  delete userData.password;
  delete userData.loginType;

  try {
    const response = await axios.put(`/user/${userId}`, {
      ...userData,
    });
    const data = response.data;

    toast.success("Updated user successfully!", {
      id: toastId,
    });

    return data;
  } catch (error) {
    toast.error("Could not update user!", {
      id: toastId,
    });
    throw new Error(error);
  }
}

export async function deleteUserById(userId) {
  const toastId = toast.loading("Deleting User...");

  try {
    const response = await axios.delete(`/user/${userId}`);
    const data = response.data;

    toast.success("Deleted user successfully!", {
      id: toastId,
    });

    return data;
  } catch (error) {
    toast.error("Could not delete user!", {
      id: toastId,
    });
  }
}
