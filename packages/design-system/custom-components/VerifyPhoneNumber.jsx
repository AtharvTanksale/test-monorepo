import { FormProvider, useForm } from "@camonk/react-hook-form";
import {
  Box,
  Button,
  Paper,
  Stack,
  Typography,
} from "@camonk/design-system/components";
import {
  OtpInput,
  PhoneNumberInput,
} from "@camonk/design-system/custom-components";
import { useSelector } from "@camonk/react-redux";
import { useUpdatePhoneNumber, useVerifyPhoneNumber } from "@camonk/auth/hooks";

function VerifyPhoneNumber() {
  const otpSessionIdReduxStore = useSelector(
    (state) => state.auth.otpSessionId
  );

  const methods = useForm();

  const { updatePhoneNumber, isUpdatingPhoneNumber } = useUpdatePhoneNumber();
  const { verifyPhoneNumber, isVerifyingPhoneNumber } = useVerifyPhoneNumber();

  function onSubmit(data) {
    let formattedPhoneNumber = data.phone.replace(/[\s-]/g, "");
    data.phone = formattedPhoneNumber;
    if (!otpSessionIdReduxStore) {
      updatePhoneNumber(data);
    } else {
      const phone = data.phone;
      const otp = data["verify-otp"];
      const otpSessionId = otpSessionIdReduxStore;
      verifyPhoneNumber({ phone, otp, otpSessionId });
    }

    // methods.reset();
  }

  function onError(errors) {
    console.log(errors);
  }

  return (
    <Paper
      component="section"
      sx={{
        borderRadius: 4,
        m: "0 auto",
        width: { md: "50%", xs: "90%" },
        py: { md: 6, xs: 4 },
        my: 8,
      }}
    >
      <Typography component="h2" variant="h2" textAlign="center" sx={{ mb: 6 }}>
        You are just 1 step away...
      </Typography>
      <FormProvider {...methods}>
        <Stack
          component="form"
          onSubmit={methods.handleSubmit(onSubmit, onError)}
          sx={{ width: { md: "50%", xs: "90%" }, margin: "0 auto" }}
        >
          <Box>
            <PhoneNumberInput
              id="phone"
              label="Enter your phone number"
              validation={{
                // required: "This field is required",
                validate: (value) => {
                  const regex = /^(\+91[\s-]?)?[6-9]\d{4}[\s-]?\d{5}$/;
                  return (
                    regex.test(value) || "Please enter a valid phone number"
                  );
                },
              }}
              disabled={isUpdatingPhoneNumber || isVerifyingPhoneNumber}
            />
          </Box>

          {otpSessionIdReduxStore ? (
            <Box sx={{ mt: 2 }}>
              <OtpInput id="verify-otp" />
            </Box>
          ) : null}

          <Button
            disabled={isUpdatingPhoneNumber || isVerifyingPhoneNumber}
            sx={{ mt: 2 }}
            variant="contained"
            type="submit"
          >
            {otpSessionIdReduxStore ? "Verify OTP" : "Send OTP"}
          </Button>
        </Stack>
      </FormProvider>
    </Paper>
  );
}

export { VerifyPhoneNumber };
