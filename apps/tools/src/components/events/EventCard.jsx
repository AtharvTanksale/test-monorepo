import dayjs from "dayjs";
import { useTheme } from "@camonk/design-system";
import { useNavigate } from "@camonk/router";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@camonk/design-system/components";
import {
  AccessTimeOutlined as AccessTimeOutlinedIcon,
  AccountCircleOutlined as AccountCircleOutlinedIcon,
  Circle as CircleIcon,
} from "@camonk/design-system/icons";
import { eventStausColors } from "../../utils/constants";

function EventCard({ event }) {
  const theme = useTheme();
  const navigate = useNavigate();

  const {
    id,
    imageSrc,
    title,
    date,
    startTime,
    endTime,
    totalRegistered,
    maxAllowedSpots,
    status,
    price,
  } = event;

  function handleClick(id) {
    if (status === "OPENED") navigate(`${id}`);
  }

  function handleButtonClick(e) {
    e.stopPropagation();
    navigate(`${id}`);
  }

  console.log("StartTime", startTime);

  return (
    <Card
      sx={{
        p: { md: 4, xs: 2 },
        borderRadius: 4,
        cursor: status === "OPENED" ? "pointer" : "not-allowed",
        border: `1px solid ${
          theme.palette.mode === "light" ? "#CECECE" : "#333333"
        }`,
      }}
      elevation={0}
      raised={false}
      onClick={() => handleClick(id)}
    >
      <Stack
        direction={{ md: "row", xs: "column" }}
        spacing={{ md: 5, xs: 3 }}
        justifyContent="space-between"
      >
        <CardMedia
          component="img"
          height="164"
          image={imageSrc}
          alt="Event Img"
          sx={{
            width: { md: "280px", xs: "100%" },
            borderRadius: 2,
            flex: "25%",
          }}
        />

        <CardContent sx={{ flex: "55%", p: 0 }}>
          <Stack direction="column" spacing={2}>
            <Stack direction="row" spacing={2} alignItems="center">
              <Typography
                variant="body2"
                sx={{
                  backgroundColor:
                    theme.palette.mode === "light" ? "#374151" : "#fff",
                  color: theme.palette.mode === "light" ? "#fff" : "#000",
                  p: theme.spacing(0.4, 1.5),
                  borderRadius: 1,
                  width: "fit-content",
                  fontWeight: 500,
                }}
              >
                {dayjs(date).format("dddd, Do MMMM")}
              </Typography>

              <Typography
                variant="caption"
                sx={{
                  color: eventStausColors[status]["color"],
                  backgroundColor: eventStausColors[status]["background"],
                  fontWeight: 500,
                  textTransform: "capitalize",
                  textAlign: "center",
                  width: "fit-content",
                  p: theme.spacing(0.2, 1),
                  display: "flex",
                  alignItems: "baseline",
                  gap: 0.5,
                }}
              >
                <CircleIcon
                  fontSize="small"
                  sx={{ width: "7px", height: "7px" }}
                />
                {event.status}
              </Typography>
            </Stack>

            <Typography variant="h4" component="h4" sx={{ fontWeight: 600 }}>
              {title}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                opacity: 0.8,
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <AccessTimeOutlinedIcon /> {dayjs(startTime).format("hh:mm a")} to{" "}
              {dayjs(endTime).format("hh:mm a")}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                opacity: 0.8,
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <AccountCircleOutlinedIcon />
              Capacity: {totalRegistered} / {maxAllowedSpots}
            </Typography>
          </Stack>
        </CardContent>

        <CardActions
          sx={{
            flex: "20%",
            justifyContent: "space-around",
            alignItems: "end",
          }}
        >
          <Button
            variant="contained"
            sx={{
              borderRadius: 2,
              fontWeight: 500,
              width: { md: "fit-content", xs: "100%" },
            }}
            onClick={handleButtonClick}
            disabled={status === "CANCELLED" || status === "CLOSED"}
          >
            {!price ? "Book Now" : `Book Now @ ₹${price}`}
          </Button>
        </CardActions>
      </Stack>
    </Card>
  );
}

export default EventCard;
