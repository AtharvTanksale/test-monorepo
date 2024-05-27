import { Outlet } from "@camonk/router";
import { Container } from "@camonk/design-system/components";
import { Navbar } from "../components/navbar/Navbar";

function AppLayout() {
  return (
    <>
      <Navbar />
      <Container component="main" maxWidth="xl" disableGutters>
        <Outlet />
      </Container>
    </>
  );
}
export default AppLayout;
