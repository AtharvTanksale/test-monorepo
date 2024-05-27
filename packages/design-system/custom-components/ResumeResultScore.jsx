import {
  Box,
  CircularProgress,
  Grid,
  Paper,
  Stack,
  Typography,
} from "../components";

function ResumeResultScore({ percentageValue, description }) {
  return (
    <>
      <Paper
        component="section"
        sx={{
          borderRadius: 4,
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
          m: "0 auto",
          width: { md: "85%", xs: "90%" },
          py: { md: 8, xs: 4 },
          px: { md: 8, xs: 4 },
        }}
      >
        <Stack direction="column" spacing={4}>
          <Grid container>
            <Grid item xs={12} md={4} sx={{ mb: 4 }}>
              <Box
                sx={{
                  position: "relative",
                  display: { md: "inline-block", xs: "flex" },
                  justifyContent: "center",
                }}
              >
                <CircularProgress
                  color="primary"
                  variant="determinate"
                  value={percentageValue}
                  size="240px"
                  thickness={4}
                />
                <Box
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    zIndex: 1,
                    display: "flex",
                    flexDirection: "column",
                    gap: 4,
                  }}
                >
                  <Typography align="center" component="h2" variant="h1">
                    {percentageValue}
                  </Typography>
                  <Typography
                    align="center"
                    component="span"
                    variant="body1"
                    fontWeight="300"
                    sx={{ opacity: 0.7 }}
                  >
                    Overall Score
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={8}>
              <Stack direction="column">
                <Typography
                  component="span"
                  variant="body1"
                  fontWeight="400"
                  sx={{ opacity: 0.7 }}
                >
                  Your Results
                </Typography>
                <Typography
                  component="h3"
                  variant="h3"
                  sx={{ m: "10px 0 20px" }}
                >
                  You Scored {percentageValue} out of 100
                </Typography>
                <Typography
                  component="p"
                  variant="body1"
                  sx={{ opacity: "0.8", textWrap: "balance" }}
                >
                  {description}
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Stack>
      </Paper>
    </>
  );
}

export { ResumeResultScore };
