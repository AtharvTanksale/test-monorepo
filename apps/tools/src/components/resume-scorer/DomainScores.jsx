import { Box, Grid } from "@camonk/design-system/components";
import DomainScore from "./DomainScore";

function DomainScores() {
  return (
    <Box
      sx={{
        borderRadius: 4,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        m: "0 auto",
        width: { md: "85%", xs: "90%" },
        my: 4,
      }}
    >
      <Grid container spacing={2}>
        {[90, 10, 70, 40].map((value, index) => (
          <Grid item xs={12} md={4} key={index}>
            <DomainScore valuePercentage={value} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default DomainScores;
