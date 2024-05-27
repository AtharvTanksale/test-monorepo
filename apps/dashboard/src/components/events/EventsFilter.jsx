// import dayjs from "dayjs";
// import { useTheme } from "@camonk/design-system";
// import {
//   AdapterDayjs,
//   IconButton,
//   LocalizationProvider,
//   Stack,
//   Tab,
//   Tabs,
//   DatePicker,
//   Tooltip,
// } from "@camonk/design-system/components";
// import { Clear as ClearIcon } from "@camonk/design-system/icons";
// import { useState } from "react";
// import { useSearchParams } from "@camonk/router";

// function EventsFilter() {
//   const theme = useTheme();

//   const [searchParams, setSearchParams] = useSearchParams();

//   const [sortValue, setSortValue] = useState("ALL");
//   const [fromDate, setFromDate] = useState(null);
//   const [toDate, setToDate] = useState(null);

//   function handleSortChange(event, newValue) {
//     setSortValue(newValue);

//     setSearchParams(
//       (prev) => {
//         if (newValue === "ALL") {
//           prev.delete("status");
//         } else {
//           prev.set("status", newValue);
//         }
//         return prev;
//       },
//       { replace: true }
//     );
//   }

//   function handleFromDateChange(newValue) {
//     const formattedDate = newValue
//       ? dayjs(newValue).format("YYYY-MM-DD")
//       : null;
//     setFromDate(newValue);

//     setSearchParams(
//       (prev) => {
//         if (formattedDate) {
//           prev.set("from", formattedDate);
//         } else {
//           prev.delete("from");
//         }
//         return prev;
//       },
//       { replace: true }
//     );
//   }

//   function handleToDateChange(newValue) {
//     const formattedDate = newValue
//       ? dayjs(newValue).format("YYYY-MM-DD")
//       : null;
//     setToDate(newValue);

//     setSearchParams(
//       (prev) => {
//         if (formattedDate) {
//           prev.set("to", formattedDate);
//         } else {
//           prev.delete("to");
//         }
//         return prev;
//       },
//       { replace: true }
//     );
//   }

//   function clearAllFilters() {
//     setSortValue("ALL");
//     setFromDate(null);
//     setToDate(null);

//     setSearchParams({}, { replace: true });
//   }

//   return (
//     <Stack direction="row" justifyContent="space-between" alignItems="center">
//       <Tabs
//         value={sortValue}
//         onChange={handleSortChange}
//         textColor="primary"
//         indicatorColor="primary"
//         aria-label="secondary tabs example"
//       >
//         <Tab
//           value="ALL"
//           label="All Events"
//           sx={{ fontSize: theme.typography.body1, fontWeight: 600 }}
//         />
//         <Tab
//           value="CANCELLED"
//           label="Cancelled"
//           sx={{ fontSize: theme.typography.body1, fontWeight: 600 }}
//         />
//       </Tabs>

//       <Stack direction="row" alignItems="center" spacing={2}>
//         <LocalizationProvider dateAdapter={AdapterDayjs}>
//           <DatePicker
//             label="From"
//             value={fromDate}
//             onChange={handleFromDateChange}
//             format="MMM DD, YYYY"
//           />

//           <DatePicker
//             label="To"
//             value={toDate}
//             onChange={handleToDateChange}
//             format="MMM DD, YYYY"
//           />
//         </LocalizationProvider>
//         <Tooltip title="Clear Filter">
//           <IconButton
//             aria-label="clear filter"
//             color="error"
//             onClick={clearAllFilters}
//           >
//             <ClearIcon fontSize="large" />
//           </IconButton>
//         </Tooltip>
//       </Stack>
//     </Stack>
//   );
// }

// export default EventsFilter;

import dayjs from "dayjs";
import { useTheme } from "@camonk/design-system";
import {
  AdapterDayjs,
  IconButton,
  LocalizationProvider,
  Stack,
  Tab,
  Tabs,
  DatePicker,
  Tooltip,
} from "@camonk/design-system/components";
import { Clear as ClearIcon } from "@camonk/design-system/icons";
import { useState, useEffect } from "react";
import { useSearchParams } from "@camonk/router";

function EventsFilter() {
  const theme = useTheme();
  const [searchParams, setSearchParams] = useSearchParams();

  const currentDate = dayjs();

  const [sortValue, setSortValue] = useState("ALL");
  const [fromDate, setFromDate] = useState(currentDate);
  const [toDate, setToDate] = useState(null);

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

  function handleSortChange(event, newValue) {
    setSortValue(newValue);

    setSearchParams(
      (prev) => {
        if (newValue === "ALL") {
          prev.delete("status");
        } else {
          prev.set("status", newValue);
        }
        return prev;
      },
      { replace: true }
    );
  }

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

  function handleToDateChange(newValue) {
    const formattedDate = newValue ? newValue.format("YYYY-MM-DD") : null;
    setToDate(newValue);

    setSearchParams(
      (prev) => {
        if (formattedDate) {
          prev.set("to", formattedDate);
        } else {
          prev.delete("to");
        }
        return prev;
      },
      { replace: true }
    );
  }

  function clearAllFilters() {
    setSortValue("ALL");
    setFromDate(currentDate);
    setToDate(null);

    setSearchParams(
      (prev) => {
        prev.delete("status");
        prev.set("from", currentDate.format("YYYY-MM-DD"));
        prev.delete("to");
        return prev;
      },
      { replace: true }
    );
  }

  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      <Tabs
        value={sortValue}
        onChange={handleSortChange}
        textColor="primary"
        indicatorColor="primary"
        aria-label="secondary tabs example"
      >
        <Tab
          value="ALL"
          label="All Events"
          sx={{ fontSize: theme.typography.body1, fontWeight: 600 }}
        />
        <Tab
          value="CANCELLED"
          label="Cancelled"
          sx={{ fontSize: theme.typography.body1, fontWeight: 600 }}
        />
      </Tabs>

      <Stack direction="row" alignItems="center" spacing={2}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="From"
            value={fromDate}
            onChange={handleFromDateChange}
            format="MMM DD, YYYY"
          />

          <DatePicker
            label="To"
            value={toDate}
            onChange={handleToDateChange}
            format="MMM DD, YYYY"
          />
        </LocalizationProvider>
        <Tooltip title="Clear Filter">
          <IconButton
            aria-label="clear filter"
            color="error"
            onClick={clearAllFilters}
          >
            <ClearIcon fontSize="large" />
          </IconButton>
        </Tooltip>
      </Stack>
    </Stack>
  );
}

export default EventsFilter;
