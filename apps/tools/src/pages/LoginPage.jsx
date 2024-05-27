import { useSelector } from "@camonk/react-redux";
import { Box, Container } from "@camonk/design-system/components";
import LoginFormLayout from "../layouts/LoginFormLayout";

function LoginPage() {
  const { user } = useSelector((state) => state.auth);

  return !user ? (
    <Container component="section">{<LoginFormLayout />}</Container>
  ) : (
    <Container>
      <Box>You are already logged in!</Box>
    </Container>
  );
}

export default LoginPage;
