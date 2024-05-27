import { useEffect, useState } from "react";
import { useSearchParams } from "@camonk/router";
import {
  ToggleButton,
  ToggleButtonGroup,
} from "@camonk/design-system/components";

function DaysFilter() {
  const [sortValue, setSortValue] = useState("7");
  const [searchParams, setSearchParams] = useSearchParams();

  const statusValue = searchParams.get("last");

  useEffect(() => {
    if (statusValue) {
      setSortValue(statusValue);
    }
  }, [statusValue]);

  function handleChange(event, newValue) {
    if (newValue !== null) {
      setSortValue(newValue);
      setSearchParams(
        (prev) => {
          prev.set("last", newValue);
          return prev;
        },
        { replace: true }
      );
    }
  }

  return (
    <ToggleButtonGroup
      color="primary"
      value={sortValue}
      exclusive
      onChange={handleChange}
      aria-label="days-filter"
    >
      <ToggleButton value="7">Last 7 days</ToggleButton>
      <ToggleButton value="30">Last 30 days</ToggleButton>
      <ToggleButton value="90">Last 90 days</ToggleButton>
    </ToggleButtonGroup>
  );
}

export default DaysFilter;
