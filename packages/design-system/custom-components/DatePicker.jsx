import dayjs from "dayjs";
import { Controller, useFormContext } from "@camonk/react-hook-form";
import {
  LocalizationProvider,
  AdapterDayjs,
  DatePicker as MuiDatePicker,
} from "../components";
import { FieldError } from "./FieldError";

function DatePicker({ id, validation, defaultValue, ...props }) {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Controller
          name={id}
          defaultValue={defaultValue}
          control={control}
          rules={validation}
          render={({ field }) => (
            <MuiDatePicker
              {...field}
              label="Select date"
              value={field.value ? dayjs(field.value, "DD/MM/YYYY") : null}
              // onChange={(date) => field.onChange(date?.toDate())}
              {...props}
            />
          )}
        />
      </LocalizationProvider>
      {errors?.[id] && <FieldError>{errors[id].message}</FieldError>}
    </>
  );
}

export { DatePicker };
