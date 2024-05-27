import { useTheme } from "@camonk/design-system";
import { Box, Grid, Stack, Typography } from "@camonk/design-system/components";

function EventTableRowHeader() {
  const theme = useTheme();

  return (
    <Grid
      container
      sx={{
        backgroundColor: theme.palette.primary.main,
        p: theme.spacing(2, 2),
        borderRadius: 2,
        alignItems: "center",
        justifyContent: "space-between",
        color: "#fff",
      }}
    >
      <Grid item md={2}>
        <Typography variant="body2" sx={{ fontWeight: 600 }}>
          Time
        </Typography>
      </Grid>

      <Grid item md={4}>
        <Typography variant="body2" sx={{ fontWeight: 600 }}>
          Name
        </Typography>
      </Grid>

      <Grid item md={1}>
        <Typography variant="body2" sx={{ fontWeight: 600 }}>
          Booked
        </Typography>
      </Grid>

      <Grid item md={2}>
        <Typography variant="body2" sx={{ fontWeight: 600 }}>
          Created At
        </Typography>
      </Grid>

      <Grid item md={1}>
        <Typography variant="body2" sx={{ fontWeight: 600 }}>
          Status
        </Typography>
      </Grid>

      <Grid item md={1}></Grid>
    </Grid>
  );
}

export default EventTableRowHeader;
