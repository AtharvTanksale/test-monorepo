import { Controller, useFormContext } from "@camonk/react-hook-form";
import {
  ToggleButton,
  Typography,
  ToggleButtonGroup as MuiToggleButtonGroup,
} from "../components";
import { FieldError } from "./FieldError";
import { FieldLabel } from "./FieldLabel";
import { useTheme } from "../index";

const CustomToggleButtonGroup = ({
  label,
  id,
  values,
  icons,
  valueLabels,
  bgcolor,
  validation,
}) => {
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
        rules={validation}
        render={({ field }) => (
          <MuiToggleButtonGroup
            {...field}
            sx={{ display: "flex", gap: { md: 2, xs: 1.7 } }}
            variant="contained"
            size="large"
            aria-label={`${label.replace(/\s+/g, "")}`}
            // value={field.value !== "" ? field.value : null}
            onChange={(e, value) => field.onChange(value)}
            exclusive
          >
            {values.map((value, index) => (
              <div key={index}>
                <ToggleButton
                  value={value}
                  aria-label={`${value}`}
                  sx={{
                    p: 1,
                    border: "2px solid #d9d9d9 !important",
                    borderRadius: "10px !important",
                    display: "flex",
                    flexDirection: "column",
                    minWidth: { md: "50px", xs: "38px" },
                    minHeight: { md: "50px", xs: "38px" },

                    '&[aria-pressed="true"]': {
                      backgroundColor: bgcolor && theme.palette.primary.main,
                      border: `2px solid ${theme.palette.primary.main} !important`,

                      "&:hover": {
                        backgroundColor: bgcolor && theme.palette.primary.dark,
                      },
                    },

                    '&[aria-pressed="true"] p': {
                      color: bgcolor && "#fff",
                    },
                  }}
                >
                  {icons[index]}
                </ToggleButton>
                {valueLabels && (
                  <Typography variant="caption" component="h6" align="center">
                    {valueLabels[index]}
                  </Typography>
                )}
              </div>
            ))}
          </MuiToggleButtonGroup>
        )}
      />
      {errors?.[id] && <FieldError>{errors[id].message}</FieldError>}
    </>
  );
};

export { CustomToggleButtonGroup };
