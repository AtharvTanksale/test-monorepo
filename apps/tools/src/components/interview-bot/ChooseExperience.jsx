import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
} from "@camonk/design-system/components";
import { ChevronRight as ChevronRightIcon } from "@camonk/design-system/icons";
import { useTheme } from "@camonk/design-system";
import { useDispatch } from "@camonk/react-redux";
import { getExperience } from "./InterviewBotSlice";

const EXPERIENCE_LEVEL = ["A Fresher", "An Experienced"];

function ChooseExperience() {
  const theme = useTheme();

  const dispatch = useDispatch();

  return (
    <Container>
      <Box>
        <Typography
          variant="h4"
          component="h2"
          textAlign="center"
          sx={{ mb: { md: 10, xs: 6 } }}
        >
          What is your Experience level?
        </Typography>

        <Stack
          direction="column"
          sx={{ width: { md: "45%", xs: "100%" }, margin: "0 auto" }}
        >
          {EXPERIENCE_LEVEL.map((experience, index) => (
            <Button
              variant="outlined"
              key={experience}
              endIcon={<ChevronRightIcon />}
              sx={{
                mb: 1,
                color: theme.palette.text.primary,
                backgroundColor: theme.palette.background.paper,
                border: `1px solid ${theme.palette.background.paper}`,
                display: "flex",
                justifyContent: "space-between",
                padding: theme.spacing(1.5, 2),
              }}
              onClick={() => dispatch(getExperience(experience))}
            >
              {experience}
            </Button>
          ))}
        </Stack>
      </Box>
    </Container>
  );
}

export default ChooseExperience;
