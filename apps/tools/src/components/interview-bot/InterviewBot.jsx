import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

import { useTheme } from "@camonk/design-system";
import {
  Mic as MicIcon,
  East as GoForwardIcon,
  Done as DoneIcon,
  ExpandMore as ExpandMoreIcon,
  FormatAlignLeft as FormatAlignLeftIcon,
} from "@camonk/design-system/icons";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Stack,
  TextField,
  Typography,
} from "@camonk/design-system/components";
import { useDispatch, useSelector } from "@camonk/react-redux";
import {
  hasGivenAnswer,
  isGivingAnswer,
  resetGivenAnswer,
} from "./InterviewBotSlice";

function InterviewBot() {
  const theme = useTheme();
  const dispatch = useDispatch();

  const state = useSelector((state) => state.interviewBot);

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  function handleListening() {
    if (state.givingAnswer === false && state.newAnswer.length === 0) {
      dispatch(isGivingAnswer());
      SpeechRecognition.startListening({ continuous: true });
    } else if (state.givingAnswer && state.newAnswer.length === 0) {
      dispatch(hasGivenAnswer(transcript));
      SpeechRecognition.stopListening();
    } else if (state.givingAnswer === false && state.newAnswer.length > 0) {
      dispatch(resetGivenAnswer());
      resetTranscript();
      SpeechRecognition.startListening({ continuous: true });
    }
  }

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesnt support speech recognition.</span>;
  }

  return (
    <>
      <Card
        raised={false}
        elevation={1}
        sx={{
          width: { md: "75%", xs: "100%" },
          margin: "0 auto",
          borderRadius: theme.spacing(3),
        }}
      >
        <CardContent sx={{ mb: 5, p: 0 }}>
          <Typography variant="h5" sx={{ p: theme.spacing(4) }}>
            What is your understanding of direct taxes and how do they differ
            from indirect taxes?
          </Typography>

          <Accordion
            elevation={0}
            sx={{
              p: theme.spacing(1, 4),
              borderTop: `1px solid ${theme.palette.background.default}`,
              backgroundColor:
                theme.palette.mode === "light" ? "#F7F8FA" : "#1e1e1e",
              display: state.givingAnswer || state.newAnswer ? "block" : "none",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon fontSize="large" />}
              aria-controls="panel1-content"
              id="panel1-header"
              sx={{ p: 0 }}
            >
              <FormatAlignLeftIcon fontSize="large" sx={{ mr: 2 }} />
              {state.givingAnswer ? "Transcribing your answer" : "Your Answer"}
            </AccordionSummary>
            <AccordionDetails sx={{ p: 0 }}>
              <TextField
                variant="standard"
                multiline
                maxRows={10}
                sx={{ width: "100%" }}
                defaultValue={transcript}
              ></TextField>
            </AccordionDetails>
          </Accordion>
        </CardContent>

        <CardActions sx={{ p: theme.spacing(0, 4, 4) }}>
          <Stack
            direction="row"
            justifyContent="space-between"
            sx={{ width: "100%" }}
          >
            <Box>
              <Button
                startIcon={state.givingAnswer ? <DoneIcon /> : <MicIcon />}
                variant={!state.newAnswer ? "contained" : "outlined"}
                size="large"
                sx={{
                  fontSize: theme.typography.body1.fontSize,
                  "&.MuiButton-root": {
                    fontSize: theme.typography.body1.fontSize,
                  },
                }}
                onClick={handleListening}
              >
                {!state.givingAnswer && !state.newAnswer
                  ? "Record Your Answer"
                  : state.givingAnswer
                  ? "Done"
                  : !state.givingAnswer && state.newAnswer
                  ? "Redo"
                  : ""}
              </Button>
            </Box>

            <Box sx={{ display: "flex", gap: 2 }}>
              <Button
                variant={!state.newAnswer ? "outlined" : "contained"}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "50px",
                  height: "50px",
                  cursor: "pointer",
                }}
              >
                <GoForwardIcon fontSize="large" />
              </Button>

              <Button
                variant="contained"
                size="large"
                color="error"
                sx={{
                  fontSize: theme.typography.body1.fontSize,
                  "&.MuiButton-root": {
                    fontSize: theme.typography.body1.fontSize,
                  },
                }}
              >
                End
              </Button>
            </Box>
          </Stack>
        </CardActions>
      </Card>
    </>
  );
}

export default InterviewBot;
