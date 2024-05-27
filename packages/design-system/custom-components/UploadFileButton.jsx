import { useFormContext } from "@camonk/react-hook-form";
import { useTheme, styled } from "../index";
import { Button, Typography } from "../components";
import { FieldLabel } from "./FieldLabel";
import { FieldError } from "./FieldError";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

function UploadFileButton({
  variant,
  color,
  size,
  startIcon,
  label,
  id,
  accept,
  children,
}) {
  const theme = useTheme();
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext();

  const fileName = watch(id);

  return (
    <>
      <FieldLabel id={id}>{label}</FieldLabel>
      <Button
        component="label"
        role={undefined}
        variant={variant}
        color={color}
        size={size}
        tabIndex={-1}
        startIcon={startIcon}
        sx={{
          borderWidth: "2px",

          "&:hover": {
            borderWidth: "2px",
          },
        }}
      >
        {children}
        <VisuallyHiddenInput
          type="file"
          accept={accept}
          {...register(id, {
            validate: (fileData) => {
              if (typeof fileData === "string" || fileData?.length === 1)
                return true;
              return "File is required";
            },
          })}
        />
      </Button>
      <Typography
        component="span"
        sx={{ fontSize: theme.typography.caption, ml: 2 }}
      >
        {fileName?.[0]?.name ? fileName[0].name : "No file choosen"}
      </Typography>

      {errors?.[id] && <FieldError>{errors[id].message}</FieldError>}
    </>
  );
}

export { UploadFileButton };
