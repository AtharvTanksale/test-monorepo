import { useTheme, InputLabel } from "../components";

function FieldLabel({ id, children }) {
  const theme = useTheme();

  return (
    <InputLabel
      htmlFor={id}
      sx={{
        mb: 2,
        fontSize: theme.typography.body2,
        color: theme.palette.text.primary,
        fontWeight: "600",
      }}
    >
      {children}
    </InputLabel>
  );
}

export { FieldLabel };
