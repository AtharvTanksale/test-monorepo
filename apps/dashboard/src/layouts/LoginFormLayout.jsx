import { useState } from "react";
import { useTheme } from "@camonk/design-system";
import {
  Button,
  Divider,
  Paper,
  Stack,
  Typography,
} from "@camonk/design-system/components";
// import LoginForm from "../components/authentication/LoginForm";
// import RegisterForm from "../components/authentication/RegisterForm";
import {
  LoginForm,
  RegisterForm,
} from "@camonk/design-system/custom-components";
import {
  East as GoForwardIcon,
  West as GoBackIcon,
} from "@camonk/design-system/icons";

function LoginFormLayout() {
  const theme = useTheme();

  const [isRegistering, setIsRegistering] = useState(false);

  function handleClick() {
    setIsRegistering((prev) => !prev);
  }

  return (
    <Paper
      sx={{
        borderRadius: 4,
        m: "0 auto",
        width: { md: "80%", xs: "90%" },
        my: 8,
      }}
    >
      <Stack
        direction={{ md: "row", xs: "column" }}
        alignItems="stretch"
        sx={{
          transition: "transform 0.3s ease",
        }}
      >
        <Stack
          direction="column"
          spacing={4}
          justifyContent="center"
          sx={{
            p: 4,
            width: { md: "50%", xs: "100%" },
            transition: "transform 0.5s ease",
            transform: {
              md: `translateX(${isRegistering ? "100%" : "0"})`,
            },
            height: "auto",
          }}
        >
          <Typography
            variant="h4"
            component="h4"
            textAlign={{ md: "left", xs: "center" }}
          >
            {isRegistering ? "Create An Account" : "Welcome Back!"}
          </Typography>

          <Divider
            style={{
              marginTop: theme.spacing(2),
            }}
            orientation="horizontal"
          />

          {isRegistering ? <RegisterForm /> : <LoginForm />}
        </Stack>

        <Stack
          direction="column"
          spacing={4}
          justifyContent="center"
          alignItems="center"
          sx={{
            p: 4,
            width: { md: "50%", xs: "100%" },
            transition: "transform 0.5s ease",
            transform: {
              md: `translateX(${isRegistering ? "-100%" : "0"})`,
            },
            height: "auto",
            background: theme.palette.primary.main,
            borderRadius: {
              xs: theme.spacing(0, 0, 2, 2),
              md: isRegistering
                ? theme.spacing(2, 0, 0, 2)
                : theme.spacing(0, 2, 2, 0),
            },
            textAlign: "center",
          }}
        >
          <Typography
            variant="h2"
            component="h3"
            color="#fff"
            sx={{ textWrap: "balance" }}
          >
            {isRegistering ? (
              <>
                Already a user?
                <br />
                Log In
              </>
            ) : (
              <>
                Not a user?
                <br />
                Signup Now
              </>
            )}
          </Typography>
          <Button
            variant="outlined"
            onClick={handleClick}
            startIcon={isRegistering && <GoBackIcon />}
            endIcon={!isRegistering && <GoForwardIcon />}
            sx={{
              color: "white",
              borderColor: "white",
              width: "fit-content",
              p: theme.spacing(1, 4),

              "&:hover": {
                backgroundColor: "#ffffff",
                color: theme.palette.primary.main,
                borderColor: "#ffffffeb",
              },
            }}
          >
            {isRegistering ? "Login" : "Signup"}
          </Button>
        </Stack>
      </Stack>
    </Paper>
  );
}

export default LoginFormLayout;
