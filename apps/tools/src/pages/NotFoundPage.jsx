import { Button, Container, Stack } from "@camonk/design-system/components";
import { Lottie, NotFoundAnimation } from "@camonk/design-system/animations";

function NotFoundPage() {
  return (
    <Container component="section">
      <Stack direction="column" justifyContent="center" alignItems="center">
        <Lottie
          options={{
            autoplay: true,
            loop: true,
            animationData: NotFoundAnimation,
          }}
          width={{ md: 450, xs: 270 }}
          height={{ md: 450, xs: 270 }}
        />

        <Button
          variant="contained"
          size="large"
          sx={{ width: "300px" }}
          onClick={() => window.location.replace("/")}
        >
          Go To Homepage
        </Button>
      </Stack>
    </Container>
  );
}

export default NotFoundPage;
