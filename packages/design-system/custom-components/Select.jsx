import { Controller, useFormContext } from "@camonk/react-hook-form";
import {
  useTheme,
  FormControl,
  InputLabel,
  MenuItem,
  Select as MuiSelect,
} from "../components";
import { FieldLabel } from "./FieldLabel";
import { FieldError } from "./FieldError";

function Select({ id, label, menuItems, validation }) {
  const theme = useTheme();

  const {
    control,
    formState: { errors },
  } = useFormContext();

  const inputProps = {
    sx: { fontSize: theme.typography.h1 },
  };

  return (
    <>
      <FieldLabel id={id}>{label}</FieldLabel>
      <FormControl fullWidth>
        <InputLabel
          id={id}
          sx={{
            fontSize: theme.typography.body1,
          }}
        >
          Please Choose One
        </InputLabel>
        <Controller
          name={id}
          control={control}
          defaultValue=""
          rules={validation}
          render={({ field }) => (
            <MuiSelect
              {...field}
              // inputProps={inputProps}
              labelId={`${id}-label`}
              id={id}
              label="Please Choose One"
            >
              {menuItems.map((menuItem) => (
                <MenuItem value={menuItem} key={menuItem}>
                  {menuItem}
                </MenuItem>
              ))}
            </MuiSelect>
          )}
        />
      </FormControl>
      {errors?.[id] && <FieldError>{errors[id].message}</FieldError>}
    </>
  );
}

export { Select };
