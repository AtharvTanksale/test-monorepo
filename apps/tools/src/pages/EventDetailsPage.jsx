import dayjs from "dayjs";
import DOMPurify from "dompurify";
import { useTheme } from "@camonk/design-system";
import { useEvent } from "@camonk/events/hooks";
import {
  Avatar,
  Box,
  Container,
  Grid,
  Stack,
  Typography,
} from "@camonk/design-system/components";
import { Spinner } from "@camonk/design-system/custom-components";
import { useMoveBack } from "../hooks/useMoveBack";
import {
  EventAvailable as EventAvailableIcon,
  AccessTimeOutlined as AccessTimeOutlinedIcon,
  KeyboardBackspace as GoBackIcon,
} from "@camonk/design-system/icons";
import BookEvent from "../components/events/BookEvent";
import JoinCommunity from "../components/events/JoinCommunity";
import RelatedEvents from "../components/events/RelatedEvents";
import { useParams } from "@camonk/router";

function EventDetailsPage() {
  const theme = useTheme();
  const { eventId } = useParams();

  const { isLoading, event } = useEvent({ eventId });

  const moveBack = useMoveBack();

  if (isLoading) return <Spinner />;

  if (!event)
    return (
      <Typography variant="h4" component="h4">
        Could not load event, please try again later!
      </Typography>
    );

  const { title, description, date, startTime, endTime } = event;

  const htmlString = description;
  const sanitizedHtml = DOMPurify.sanitize(htmlString);

  const eventDurationInMinutes = dayjs(endTime).diff(
    dayjs(startTime),
    "minute"
  );

  let eventDuration;

  if (eventDurationInMinutes < 60) {
    eventDuration = `${eventDurationInMinutes} Minutes`;
  } else {
    const eventDurationHours = eventDurationInMinutes / 60;
    eventDuration = `${eventDurationHours.toFixed(1)} Hours`;
  }

  return (
    <>
      <Container
        component="section"
        sx={{
          borderRadius: 4,
          m: "0 auto",
          width: { md: "85%", xs: "90%" },
          py: { md: 8, xs: 4 },
          display: "flex",
          flexDirection: "column",
          gap: 8,
        }}
      >
        <GoBackIcon
          onClick={moveBack}
          fontSize="large"
          sx={{ cursor: "pointer" }}
        />
        <Box component="div">
          <Grid container spacing={4}>
            <Grid item xs={12} md={8}>
              <Typography variant="h2">{title}</Typography>

              <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
                <Box>
                  <Avatar alt="Remy Sharp" src="https://i.pravatar.cc/300" />
                </Box>
                <Box>
                  <Typography variant="body2">Hosted By</Typography>
                  <Typography variant="body2">CA Shivam Palan</Typography>
                </Box>
              </Stack>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 600,
                  m: theme.spacing(4, 0, 2),
                }}
              >
                Date and Time
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 0.8,
                }}
              >
                <EventAvailableIcon fontSize="large" />
                {dayjs(date).format("MMM Do,")}{" "}
                {dayjs(startTime).format("hh:mm a")} to{" "}
                {dayjs(endTime).format("hh:mm a")}
              </Typography>

              <Typography
                variant="h5"
                sx={{
                  fontWeight: 600,
                  m: theme.spacing(4, 0, 2),
                }}
              >
                About this event
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 0.8,
                }}
              >
                <AccessTimeOutlinedIcon fontSize="large" />
                {eventDuration}
              </Typography>

              {/* <Typography variant="body2" sx={{ m: theme.spacing(4, 0, 2) }}>
                {description}
              </Typography> */}

              <Typography
                variant="body2"
                component="p"
                sx={{ m: theme.spacing(4, 0, 2) }}
                dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
              />
            </Grid>

            <Grid item xs={12} md={4}>
              <Stack spacing={3}>
                <BookEvent event={event} />

                <JoinCommunity />
              </Stack>
            </Grid>
          </Grid>
        </Box>

        <Box>
          <RelatedEvents />
        </Box>
      </Container>
    </>
  );
}

export default EventDetailsPage;
