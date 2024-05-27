import { Stack } from "@camonk/design-system/components";
import { Spinner, DatePicker } from "@camonk/design-system/custom-components";
import { useEvents } from "@camonk/events/hooks";
import EventCard from "./EventCard";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

function EventsList() {
  const [searchParams] = useSearchParams();
  const from = searchParams.get("from");
  const isActive = searchParams.get("isActive");

  const filterParams = new URLSearchParams();

  if (from) filterParams.append("from", from);
  if (isActive) filterParams.append("isActive", isActive);

  const filterValue = filterParams.toString();

  const { isLoading, events, isRefetching, refetch } = useEvents({
    filterValue,
  });

  useEffect(() => {
    refetch();
  }, [refetch, filterValue]);

  if (isLoading || isRefetching) return <Spinner />;

  if (!events?.length) return <div>No events found!</div>;

  // const filteredEvents = events.filter((event) => event.isActive === true);
  const filteredEvents = events;

  return (
    <Stack
      direction="column"
      spacing={4}
      sx={{
        borderRadius: 4,
        m: "0 auto",
      }}
    >
      {filteredEvents?.map((event) => {
        return <EventCard key={event.id} event={event} />;
      })}
    </Stack>
  );
}

export default EventsList;
