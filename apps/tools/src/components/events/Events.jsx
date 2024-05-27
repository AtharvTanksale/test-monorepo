import { Stack } from "@camonk/design-system/components";
import EventsFilter from "./EventsFilter";
import EventsList from "./EventsList";

function Events() {
  return (
    <Stack
      direction="column"
      spacing={6}
      sx={{ width: { md: "80%", xs: "90%" }, margin: "50px auto" }}
    >
      <EventsFilter />
      <EventsList />
    </Stack>
  );
}

export default Events;
