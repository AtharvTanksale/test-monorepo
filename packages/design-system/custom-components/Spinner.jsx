import { Box, Stack, CircularProgress } from "../components";

function Spinner({ size = 60 }) {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        margin: "0 auto",
      }}
    >
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ mt: 25 }}
      >
        <CircularProgress size={size} />
      </Stack>
    </Box>
  );
}

export { Spinner };
