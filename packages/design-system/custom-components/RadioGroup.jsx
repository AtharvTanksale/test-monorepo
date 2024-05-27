import React from "react";
import {
  useTheme,
  FormControlLabel,
  Radio,
  RadioGroup as MuiRadioGroup,
} from "../components";
import { Controller, useFormContext } from "@camonk/react-hook-form";
import { FieldError } from "./FieldError";
import { FieldLabel } from "./FieldLabel";

function RadioGroup({ id, label, values, validation }) {
  const theme = useTheme();

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
        defaultValue=""
        rules={validation}
        render={({ field }) => (
          <MuiRadioGroup
            {...field}
            row
            aria-labelledby={id}
            name={id}
            sx={{ gap: 2 }}
          >
            {values.map((value, index) => (
              <FormControlLabel
                key={index}
                value={value}
                control={<Radio />}
                label={value}
                sx={{
                  "& .MuiSvgIcon-root": {
                    fontSize: theme.typography.h3,
                  },
                  "& .MuiFormControlLabel-label": {
                    fontSize: theme.typography.body2,
                    fontWeight: 500,
                  },
                }}
              />
            ))}
          </MuiRadioGroup>
        )}
      />
      {errors?.[id] && <FieldError>{errors[id].message}</FieldError>}
    </>
  );
}

export { RadioGroup };
