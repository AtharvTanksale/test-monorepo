import { useTheme } from "@camonk/design-system";
import {
  Box,
  Button,
  Stack,
  Typography,
} from "@camonk/design-system/components";
import { WhatsApp as WhatsAppIcon } from "@camonk/design-system/icons";

function JoinCommunity() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        border: `1px solid ${
          theme.palette.mode === "light" ? "#CECECE" : "#333333"
        }`,
        p: theme.spacing(3),
        borderRadius: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: 5,
      }}
    >
      <Typography variant="h5" textAlign="center">
        For Exclusive Job Opportunities and Placements Tips <span>👇</span>
      </Typography>

      <Stack direction="column" spacing={2}>
        <Button
          variant="outlined"
          color="success"
          startIcon={<WhatsAppIcon color="success" />}
          sx={{
            border: `1px solid ${theme.palette.success.main}`,
            borderRadius: 1.5,
            height: "48px",
            p: theme.spacing(1),
          }}
        >
          Join CA Final Whatsapp Community
        </Button>

        <Button
          variant="outlined"
          color="success"
          startIcon={<WhatsAppIcon color="success" />}
          sx={{
            border: `1px solid ${theme.palette.success.main}`,
            borderRadius: 1.5,
            height: "48px",
            p: theme.spacing(1),
          }}
        >
          Join CA Final Whatsapp Community
        </Button>
      </Stack>
    </Box>
  );
}

export default JoinCommunity;
