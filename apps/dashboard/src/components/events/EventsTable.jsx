import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { useSearchParams } from "@camonk/router";
import { useEvents } from "@camonk/events/hooks";
import { Stack } from "@camonk/design-system/components";
import { Spinner, DatePicker } from "@camonk/design-system/custom-components";
import EventTableRowHeader from "./EventTableRowHeader";

import EventTableRow from "./EventTableRow";

function EventsTable() {
  const [searchParams] = useSearchParams();

  const statusValue = searchParams.get("status") || "";
  const from = searchParams.get("from");
  const to = searchParams.get("to");

  const filterParams = new URLSearchParams();
  if (from) filterParams.append("from", from);
  if (to) filterParams.append("to", to);
  if (statusValue) filterParams.append("status", statusValue);

  const filterValue = filterParams.toString();

  const { isLoading, events, isRefetching, refetch } = useEvents({
    filterValue,
  });

  useEffect(() => {
    refetch();
  }, [refetch, filterValue]);

  if (isLoading || isRefetching) return <Spinner />;
  // if (test) return <Spinner />;

  if (!events?.length) return <div>No events found</div>;

  const groupedEvents = [];

  events.map((event) => {
    const existingDateItem = groupedEvents.find(
      (item) => Object.keys(item)[0] === event.date
    );

    if (existingDateItem) {
      existingDateItem[event.date].push(event);
    } else {
      groupedEvents.push({ [event.date]: [event] });
    }
  });

  return (
    <>
      <Stack direction="column" spacing={4}>
        <EventTableRowHeader />

        {groupedEvents?.map((groupedEvent, index) => {
          return <EventTableRow groupedEvent={groupedEvent} key={index} />;
        })}
      </Stack>
    </>
  );
}

export default EventsTable;
