import { axios } from "../api";

// const API_URL = import.meta.env.VITE_API_URL;

// export async function getUsers(field, value, paginationModel) {
//   let queryString = "";

//   const { page, pageSize } = paginationModel;

//   if (field && value) {
//     queryString = `${field}=${value}&`;
//   }

//   try {
//     const response = await axios.get(
//       `${API_URL}/users?${queryString}_page=${page + 1}&_per_page=${pageSize}`
//     );
//     const data = response.data;

//     return data;
//   } catch (error) {
//     console.error(error);
//     throw new Error("Users could not be loaded");
//   }
// }

// export async function getUser(userId) {
//   try {
//     const response = await axios.get(`${API_URL}/users/${userId}`);
//     const data = response.data;
//     return data;
//   } catch (error) {
//     console.error(error);
//     throw new Error("User could not be loaded");
//   }
// }

// export async function getMe() {
//   try {
//     const response = await axios.get("/user/me");
//     const data = response.data;

//     return data;
//   } catch (error) {
//     console.error(error);
//   }
// }
