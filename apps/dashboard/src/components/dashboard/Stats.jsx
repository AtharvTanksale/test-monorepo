import {
  Box,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@camonk/design-system/components";
import { useTheme } from "@camonk/design-system";
import { CurrencyRupee as CurrencyRupeeIcon } from "@camonk/design-system/icons";

function Stats() {
  const theme = useTheme();

  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <Paper sx={{ p: theme.spacing(2) }}>
          <Stack direction="row" spacing={2} alignItems="center">
            <Stack
              justifyContent="center"
              alignItems="center"
              sx={{
                width: 50,
                height: 50,
                borderRadius: "50%",
                background: theme.palette.success.light,
              }}
            >
              <CurrencyRupeeIcon fontSize="large" style={{ color: "#fff" }} />
            </Stack>

            <Box>
              <Typography
                variant="caption"
                component="p"
                sx={{ opacity: 0.6, fontSize: "12px" }}
              >
                REVENUE
              </Typography>
              <Typography variant="h4">100000</Typography>
            </Box>
          </Stack>
        </Paper>
      </Grid>
      <Grid item xs={3}>
        <Paper sx={{ p: theme.spacing(2) }}>
          <Stack direction="row" spacing={2} alignItems="center">
            <Stack
              justifyContent="center"
              alignItems="center"
              sx={{
                width: 50,
                height: 50,
                borderRadius: "50%",
                background: theme.palette.secondary.light,
              }}
            >
              <CurrencyRupeeIcon fontSize="large" style={{ color: "#fff" }} />
            </Stack>

            <Box>
              <Typography
                variant="caption"
                component="p"
                sx={{ opacity: 0.6, fontSize: "12px" }}
              >
                NEW SIGNUPS
              </Typography>
              <Typography variant="h4">30</Typography>
            </Box>
          </Stack>
        </Paper>
      </Grid>
      <Grid item xs={3}>
        <Paper sx={{ p: theme.spacing(2) }}>
          <Stack direction="row" spacing={2} alignItems="center">
            <Stack
              justifyContent="center"
              alignItems="center"
              sx={{
                width: 50,
                height: 50,
                borderRadius: "50%",
                background: theme.palette.error.light,
              }}
            >
              <CurrencyRupeeIcon fontSize="large" style={{ color: "#fff" }} />
            </Stack>

            <Box>
              <Typography
                variant="caption"
                component="p"
                sx={{ opacity: 0.6, fontSize: "12px" }}
              >
                TOTAL TRANSACTIONS
              </Typography>
              <Typography variant="h4">100</Typography>
            </Box>
          </Stack>
        </Paper>
      </Grid>
      <Grid item xs={3}>
        <Paper sx={{ p: theme.spacing(2) }}>
          <Stack direction="row" spacing={2} alignItems="center">
            <Stack
              justifyContent="center"
              alignItems="center"
              sx={{
                width: 50,
                height: 50,
                borderRadius: "50%",
                background: theme.palette.primary.light,
              }}
            >
              <CurrencyRupeeIcon fontSize="large" style={{ color: "#fff" }} />
            </Stack>

            <Box>
              <Typography component="p" sx={{ opacity: 0.6, fontSize: "12px" }}>
                AVG TRANSACTION VALUE
              </Typography>
              <Typography variant="h4">50</Typography>
            </Box>
          </Stack>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Stats;
