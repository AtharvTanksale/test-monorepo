import { Outlet, useNavigate } from "@camonk/router";
import { KeyboardBackspace as GoBackIcon } from "@camonk/design-system/icons";
import { Container, Stack, Typography } from "@camonk/design-system/components";

function UserDetailLayout() {
  const navigate = useNavigate();

  function goBack() {
    navigate("/dashboard/users");
  }

  return (
    <Container component="section" sx={{ width: "90%" }}>
      <Stack
        direction="row"
        alignItems="center"
        spacing={1}
        width="fit-content"
        onClick={goBack}
        sx={{ cursor: "pointer" }}
      >
        <GoBackIcon fontSize="large" />
        <Typography>Go back to users</Typography>
      </Stack>
      <Outlet />
    </Container>
  );
}

export default UserDetailLayout;
