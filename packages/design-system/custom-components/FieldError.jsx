import { Typography, useTheme } from "../components";

function FieldError({ children }) {
  const theme = useTheme();

  return (
    <Typography
      color="error"
      sx={{ fontSize: theme.typography.caption, mt: 0.3 }}
    >
      {children}
    </Typography>
  );
}

export { FieldError };
