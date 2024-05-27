import { useDispatch } from "@camonk/react-redux";
import { useTheme } from "@camonk/design-system";
import { Box, Stack, Typography } from "@camonk/design-system/components";
import { West as GoBackIcon } from "@camonk/design-system/icons";
import { goBack } from "./InterviewBotSlice";

function InterviewBotGoBack() {
  const theme = useTheme();
  const dispatch = useDispatch();

  function handleClick() {
    console.log("clicked me");
    dispatch(goBack());
  }

  return (
    <Stack
      direction="row"
      justifyContent="center"
      sx={{
        backgroundColor: theme.palette.mode === "light" ? "#E0E3EA" : "#1A1A2E",
        px: 10,
        py: 2.5,
      }}
    >
      <Box sx={{ position: "relative", width: "100%" }}>
        <GoBackIcon
          fontSize="large"
          sx={{ position: "absolute", left: 0, cursor: "pointer" }}
          onClick={handleClick}
        />
        <Typography variant="h5" textAlign="center">
          Interview Bot
        </Typography>
      </Box>
    </Stack>
  );
}

export default InterviewBotGoBack;
