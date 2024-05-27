import dayjs from "dayjs";
import { useTheme } from "@camonk/design-system";
import {
  AdapterDayjs,
  LocalizationProvider,
  Stack,
  DatePicker,
} from "@camonk/design-system/components";
import { useState, useEffect } from "react";
import { useSearchParams } from "@camonk/router";

function EventsFilter() {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentDate = dayjs();

  const [fromDate, setFromDate] = useState(currentDate);

  useEffect(() => {
    // Set initial fromDate in the URL if not already set
    if (!searchParams.get("from")) {
      setSearchParams(
        (prev) => {
          prev.set("from", currentDate.format("YYYY-MM-DD"));
          return prev;
        },
        { replace: true }
      );
    } else {
      setFromDate(dayjs(searchParams.get("from")));
    }
  }, [currentDate, searchParams, setSearchParams]);

  useEffect(() => {
    // Set isActive parameter in the URL
    setSearchParams(
      (prev) => {
        prev.set("isActive", true);
        return prev;
      },
      { replace: true }
    );
  }, [setSearchParams]);

  function handleFromDateChange(newValue) {
    const formattedDate = newValue
      ? newValue.format("YYYY-MM-DD")
      : currentDate.format("YYYY-MM-DD");

    setFromDate(newValue || currentDate);

    setSearchParams(
      (prev) => {
        prev.set("from", formattedDate);
        return prev;
      },
      { replace: true }
    );
  }

  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      <Stack direction="row" alignItems="center" spacing={2}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="From"
            value={fromDate}
            onChange={handleFromDateChange}
            format="MMM DD, YYYY"
          />
        </LocalizationProvider>
      </Stack>
    </Stack>
  );
}

export default EventsFilter;
