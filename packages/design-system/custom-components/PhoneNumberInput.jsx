import MuiPhoneNumber from "material-ui-phone-number-2";
import { Controller, useFormContext } from "@camonk/react-hook-form";
import { FieldLabel } from "./FieldLabel";
import { FieldError } from "./FieldError";

function PhoneNumberInput({ id, label, validation, defaultValue, ...props }) {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <FieldLabel id={id}>{label}</FieldLabel>
      <Controller
        name={id}
        control={control}
        defaultValue={defaultValue}
        rules={validation}
        render={({ field }) => (
          <MuiPhoneNumber
            {...field}
            id={id}
            defaultCountry={"in"}
            variant="outlined"
            size="medium"
            sx={{ width: "100%" }}
            error={Boolean(errors?.[id]?.message)}
            {...props}
          />
        )}
      />
      {errors?.[id] && <FieldError>{errors[id].message}</FieldError>}
    </>
  );
}

export { PhoneNumberInput };
