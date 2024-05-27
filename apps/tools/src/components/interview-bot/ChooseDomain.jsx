import { useDispatch } from "@camonk/react-redux";
import { useTheme } from "@camonk/design-system";
import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
} from "@camonk/design-system/components";
import { ChevronRight as ChevronRightIcon } from "@camonk/design-system/icons";
import { getDomain } from "./InterviewBotSlice";

const DOMAINS = [
  "Statutory Audit",
  "Internal Audit",
  "Indirect Tax",
  "Direct Tax",
  "Finance Controllership",
  "Investment Banking",
  "Management Consulting",
  "Financial Planning & Analysis",
  "Transfer Pricing",
];

function ChooseDomain() {
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
          Which Domain do you want to practice for?
        </Typography>

        <Stack
          direction="column"
          sx={{ width: { md: "45%", xs: "100%" }, margin: "0 auto" }}
        >
          {DOMAINS.map((domain, index) => (
            <Button
              variant="outlined"
              key={domain}
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
              onClick={() => dispatch(getDomain(domain))}
            >
              {domain}
            </Button>
          ))}
        </Stack>
      </Box>
    </Container>
  );
}

export default ChooseDomain;
