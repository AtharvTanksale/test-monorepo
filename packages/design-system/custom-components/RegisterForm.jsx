import { useNavigate } from "@camonk/router";
import { Box, Button, Stack } from "@camonk/design-system/components";
import { Input } from "@camonk/design-system/custom-components";
import { FormProvider, useForm } from "@camonk/react-hook-form";
import { HowToReg as HowToRegIcon } from "@camonk/design-system/icons";
import { useSignup } from "@camonk/auth/hooks";

function RegisterForm() {
  const methods = useForm();
  const navigate = useNavigate();

  const { isSigningUp, signup } = useSignup();

  function onSubmit(data) {
    signup(data, {
      onSuccess: () => {
        navigate("/");
      },
    });
    methods.reset();
  }

  function onError(errors) {
    console.log(errors);
  }

  return (
    <FormProvider {...methods}>
      <Stack
        component="form"
        spacing={4}
        onSubmit={methods.handleSubmit(onSubmit, onError)}
      >
        <Box>
          <Input
            id="firstName"
            label="First Name"
            size="medium"
            type="string"
            placeholder="Enter your first name"
            validation={{ required: "This field is required" }}
          />
        </Box>

        <Box>
          <Input
            id="lastName"
            label="Last Name"
            size="medium"
            type="string"
            placeholder="Enter your last name"
            validation={{ required: "This field is required" }}
          />
        </Box>

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
            validation={{
              required: "This field is required",
            }}
          />
        </Box>

        <Button
          type="submit"
          variant="contained"
          startIcon={<HowToRegIcon />}
          disabled={isSigningUp}
        >
          Register Now
        </Button>
      </Stack>
    </FormProvider>
  );
}

export { RegisterForm };
