import { Controller, useFormContext } from "@camonk/react-hook-form";
import { MuiOtpInput } from "mui-one-time-password-input";

function OtpInput({ id, ...props }) {
  const { control } = useFormContext();

  return (
    <Controller
      name={id}
      control={control}
      defaultValue=""
      render={({ field }) => (
        <MuiOtpInput
          {...field}
          TextFieldsProps={{ type: "number" }}
          {...props}
        />
      )}
    />
  );
}

export { OtpInput };
