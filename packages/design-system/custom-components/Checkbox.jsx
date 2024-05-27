import { Controller, useFormContext } from "@camonk/react-hook-form";
import { FormControlLabel, Checkbox as MuiCheckbox } from "../components";

function Checkbox({ id, label, validation, defaultValue, ...props }) {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      name={id}
      control={control}
      defaultValue={defaultValue}
      render={({ field }) => (
        <FormControlLabel
          control={<MuiCheckbox {...field} inputRef={field.ref} {...props} />}
          label={label}
        />
      )}
    />
  );
}

export { Checkbox };
