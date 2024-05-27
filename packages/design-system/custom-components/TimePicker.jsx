import dayjs from "dayjs";
import { Controller, useFormContext } from "@camonk/react-hook-form";
import {
  LocalizationProvider,
  AdapterDayjs,
  TimePicker as MuiTimePicker,
} from "../components";

import { FieldError } from "./FieldError";

function TimePicker({ id, label, validation, ...props }) {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Controller
          name={id}
          defaultValue={null}
          control={control}
          rules={validation}
          render={({ field }) => (
            <MuiTimePicker
              {...field}
              label={label}
              value={field.value ? dayjs(field.value, "hh:mm A") : null}
              {...props}
            />
          )}
        />
      </LocalizationProvider>
      {errors?.[id] && <FieldError>{errors[id].message}</FieldError>}
    </>
  );
}

export { TimePicker };
