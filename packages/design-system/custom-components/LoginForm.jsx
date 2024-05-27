import { Link } from "@camonk/router";
import { FormProvider, useForm } from "@camonk/react-hook-form";
import {
  Box,
  Button,
  Stack,
  Typography,
} from "@camonk/design-system/components";
import { Input } from "@camonk/design-system/custom-components";
import { LockPerson as LockPersonIcon } from "@camonk/design-system/icons";
// import { useLogin } from "../../hooks/authentication/useLogin";
import { useLogin } from "@camonk/auth/hooks";
import { GoogleLoginButton } from "./GoogleLoginButton";

function LoginForm() {
  const methods = useForm();

  const { login, isLoggingIn } = useLogin();

  function onSubmit(data) {
    console.log(data);
    login(data);
    methods.reset();
  }

  function onError(errors) {
    console.log(errors);
  }

  return (
    <>
      <GoogleLoginButton />

      <Typography
        variant="body2"
        component="p"
        textAlign={{ md: "left", xs: "center" }}
        sx={{ opacity: 0.8, fontWeight: 500 }}
      >
        Or use your email & password
      </Typography>

      <FormProvider {...methods}>
        <Stack
          component="form"
          spacing={4}
          onSubmit={methods.handleSubmit(onSubmit, onError)}
        >
          <Box>
            <Input
              id="email"
              label="Email"
              size="medium"
              type="email"
              placeholder="Enter your email"
              autoComplete="email"
              validation={{
                required: "This field is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Entered value does not match email format",
                },
              }}
            />
          </Box>

          <Box>
            <Input
              id="password"
              label="Password"
              size="medium"
              type="password"
              placeholder="Enter your password"
              autoComplete="current-password"
              validation={{ required: "This field is required" }}
            />

            <Link to="/reset-password">
              <Typography
                variant="body2"
                component="p"
                color="primary"
                sx={{ mt: 1.5, fontWeight: 400 }}
              >
                Forgot your password?
              </Typography>
            </Link>
          </Box>

          <Button
            type="submit"
            variant="contained"
            endIcon={<LockPersonIcon />}
            disabled={isLoggingIn}
            // disabled={true}
          >
            Login
          </Button>
        </Stack>
      </FormProvider>
    </>
  );
}

export { LoginForm };
