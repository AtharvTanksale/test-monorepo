import {
  Stack,
  Container,
  Typography,
  Button,
} from "@camonk/design-system/components";

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <Container component="section">
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        sx={{ height: "100vh" }}
      >
        <Typography variant="h2" component="h1" sx={{ textWrap: "balance" }}>
          Something Went Wrong! <span>🤨</span>
        </Typography>

        <Typography
          variant="h5"
          component="p"
          sx={{ opacity: 0.6, mt: 2, mb: 8 }}
        >
          {error.message}
        </Typography>

        <Button
          onClick={resetErrorBoundary}
          variant="contained"
          size="large"
          sx={{
            width: "fit-content",
            height: "50px",
            fontSize: "16px",
          }}
        >
          Back To HomePage
        </Button>
      </Stack>
    </Container>
  );
}

export default ErrorFallback;
