import { useState } from "react";
import { useFormContext } from "@camonk/react-hook-form";
import { useTheme, TextField, InputAdornment, IconButton } from "../components";
import { FieldLabel } from "./FieldLabel";
import { Visibility, VisibilityOff } from "../icons";

const Input = ({
  id,
  label,
  size,
  type: inputType,
  placeholder,
  validation,
  ...props
}) => {
  const theme = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = (event) => event.preventDefault();

  const inputProps = {
    sx: { fontSize: theme.typography.body2 },
    type:
      inputType === "password"
        ? showPassword
          ? "text"
          : "password"
        : inputType,
    endAdornment: inputType === "password" && (
      <InputAdornment position="end">
        <IconButton
          aria-label="toggle password visibility"
          onClick={handleClickShowPassword}
          onMouseDown={handleMouseDownPassword}
          edge="end"
        >
          {showPassword ? <VisibilityOff /> : <Visibility />}
        </IconButton>
      </InputAdornment>
    ),
  };

  return (
    <>
      <FieldLabel id={id}>{label}</FieldLabel>
      <TextField
        InputProps={inputProps}
        type={inputType}
        id={id}
        label={placeholder}
        size={size}
        error={Boolean(errors?.[id]?.message)}
        helperText={errors?.[id]?.message}
        sx={{ width: "100%" }}
        {...register(id, { ...validation })}
        {...props}
      />
    </>
  );
};

export { Input };
