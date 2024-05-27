import { useEffect, useState, useRef } from "react";
import { useDispatch } from "@camonk/react-redux";
import { useTheme } from "@camonk/design-system";
import { Button, Stack, Typography } from "@camonk/design-system/components";
import { CoinsImage } from "@camonk/design-system/images";
import { getStarted } from "./InterviewBotSlice";

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

function WelcomeScreen() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const currentDomainTextRef = useRef(null);

  const [currentDomain, setCurrentDomain] = useState("Statutory Audit");

  useEffect(() => {
    let i = 1;

    const intervalId = setInterval(() => {
      setTimeout(() => {
        currentDomainTextRef.current.style.opacity = 1;
        setCurrentDomain(DOMAINS[i]);
        i = (i + 1) % DOMAINS.length;
      }, 500);
      currentDomainTextRef.current.style.opacity = 0;
    }, 3500);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <Stack
        component="section"
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Typography
          variant="h1"
          component="h1"
          textAlign="center"
          sx={{ textWrap: "balance" }}
        >
          Welcome to interview Bot
        </Typography>
        <Typography
          variant="body2"
          component="h6"
          textAlign="center"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 0.5,
            opacity: 0.7,
            mt: 2,
            fontWeight: 500,
          }}
        >
          <img
            src={CoinsImage}
            alt="coins"
            style={{ width: "22px", height: "22px" }}
          />
          10 Coins Required
        </Typography>

        <Stack
          component="div"
          direction="column"
          alignItems="center"
          sx={{ mt: 5 }}
        >
          <Typography
            variant="h5"
            component="h6"
            textAlign="center"
            sx={{ opacity: 0.7, fontWeight: 400 }}
          >
            A Quick way to prepare for your next interview in
          </Typography>

          <Typography
            variant="h5"
            component="h6"
            sx={{
              mt: 2,
              mb: 3,
              color: theme.palette.primary.main,
              fontWeight: 600,
              transition: "opacity 0.5s ease",
            }}
            ref={currentDomainTextRef}
          >
            {currentDomain}
          </Typography>

          <Typography
            variant="h5"
            component="h6"
            textAlign="center"
            sx={{ opacity: 0.7, fontWeight: 400 }}
          >
            Practice key questions, get feedback about your answers, and get
            more comfortable interviewing.
          </Typography>

          <Button
            variant="contained"
            size="large"
            sx={{
              mt: 5,
              width: "200px",
              height: "55px",
              fontSize: theme.typography.body1.fontSize,
              "&.MuiButton-root": { fontSize: theme.typography.body1.fontSize },
            }}
            onClick={() => dispatch(getStarted())}
          >
            Start Practicing
          </Button>
        </Stack>
      </Stack>
    </>
  );
}

export default WelcomeScreen;
