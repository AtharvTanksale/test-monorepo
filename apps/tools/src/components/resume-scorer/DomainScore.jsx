import { useState, useEffect } from "react";
import { styled } from "@camonk/design-system";
import {
  Paper,
  Stack,
  Typography,
  linearProgressClasses,
  LinearProgress,
} from "@camonk/design-system/components";

const BorderLinearProgress = styled(LinearProgress)(
  ({ theme, backgroundcolor }) => ({
    height: 28,
    borderRadius: 10,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: "#EDEDED",
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: backgroundcolor,
    },
  })
);

function DomainScore({ valuePercentage }) {
  const [backgroundColor, setBackgroundColor] = useState("");

  useEffect(() => {
    function scoreColor() {
      if (valuePercentage >= 0 && valuePercentage <= 25) {
        setBackgroundColor("#FF6961");
      } else if (valuePercentage >= 26 && valuePercentage <= 50) {
        setBackgroundColor("#FFD17D");
      } else if (valuePercentage >= 51 && valuePercentage <= 75) {
        setBackgroundColor("#F5EF99");
      } else {
        setBackgroundColor("#A4F2A4");
      }
    }

    scoreColor();

    return () => setBackgroundColor("");
  }, [valuePercentage]);

  return (
    <Paper sx={{ p: 4, borderRadius: 2 }}>
      <Stack direction="row" justifyContent="space-between" sx={{ mb: 2 }}>
        <Typography>Direct Tax</Typography>
        <Typography>{valuePercentage}%</Typography>
      </Stack>
      <BorderLinearProgress
        variant="determinate"
        backgroundcolor={backgroundColor}
        value={valuePercentage}
      />
    </Paper>
  );
}

export default DomainScore;
