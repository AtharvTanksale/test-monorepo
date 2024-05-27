import { Container, Stack } from "@camonk/design-system/components";
import EventsFilter from "./EventsFilter";
import EventsTable from "./EventsTable";

function Events() {
  return (
    <Container>
      <Stack direction="column" spacing={6}>
        <EventsFilter />
        <EventsTable />
      </Stack>
    </Container>
  );
}

export default Events;
