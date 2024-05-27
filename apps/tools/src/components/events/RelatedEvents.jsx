import dayjs from "dayjs";
import { useNavigate, useParams } from "@camonk/router";
import {
  Box,
  Button,
  Grid,
  Stack,
  Typography,
} from "@camonk/design-system/components";
import { Spinner } from "@camonk/design-system/custom-components";
import { useEvents } from "@camonk/events/hooks";
import RelatedEvent from "./RelatedEvent";

function RelatedEvents() {
  const { eventId } = useParams();
  const currentDate = dayjs().format("YYYY-MM-DD");

  const filterValue = `from=${currentDate}&isActive=true&status=OPENED`;

  const { isLoading, events } = useEvents({
    filterValue,
  });
  const navigate = useNavigate();

  if (isLoading) return <Spinner />;

  const filteredEvents = events.filter(
    (event) => event.id !== eventId && event.status === "OPENED"
  );
  const firstThreeEvents = filteredEvents.slice(0, 3);

  function handleClick() {
    navigate("/events");
  }

  if (filteredEvents.length === 0) {
    return (
      <Box>
        <Typography
          variant="h4"
          component="p"
          textAlign="center"
          sx={{ opacity: 0.7, fontWeight: 500 }}
        >
          There are no related Events! <span>😕</span>
        </Typography>
      </Box>
    );
  }

  return (
    <Box>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ mb: 4 }}
      >
        <Typography variant="h5">Related Events</Typography>
        <Button variant="text" size="large" onClick={handleClick}>
          See All
        </Button>
      </Stack>

      <Grid container spacing={6}>
        {firstThreeEvents.map((event) => (
          <Grid item key={event.id} xs={12} md={4}>
            <RelatedEvent event={event} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default RelatedEvents;
