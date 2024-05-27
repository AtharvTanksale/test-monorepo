import { useEffect, useState } from "react";
// import { axios } from "../api";
import { axios } from "@camonk/axios";
import { useSelector } from "@camonk/react-redux";
import { Container } from "@camonk/design-system/components";

function HomePage() {
  const { user } = useSelector((state) => state.auth);

  const [users, setUsers] = useState();
  // const [user, setUser] = useState();

  // async function fetchUser() {
  //   const response = await axios.get("/user/me");

  //   console.log("fetched user:", response.data);
  //   setUser(response.data);
  // }

  async function handleFetchAllUser() {
    try {
      const response = await axios.get("/user/all");
      console.log(response.data.data);

      setUsers(response.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container>
      Homepage, isAuthenticated {user ? "true" : "false"}
      {JSON.stringify(user)}
      <hr />
      <hr />
      <button onClick={handleFetchAllUser}>Fetch all users</button>
      {users?.map((item, index) => {
        return (
          <li key={index}>
            {item.email} - {item.phone}
          </li>
        );
      })}
      {/* <button onClick={() => handlePayment()}>Pay Now</button> */}
    </Container>
  );
}

export default HomePage;
