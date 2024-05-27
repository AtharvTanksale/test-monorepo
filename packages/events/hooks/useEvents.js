import { useQuery } from "@camonk/react-query";
import { getEvents } from "../services";

export function useEvents({ filterValue }) {
  const validatedFilterValue = filterValue ?? "";

  const {
    isLoading,
    data: events,
    refetch,
    isRefetching,
    error,
  } = useQuery({
    queryKey: ["events", filterValue],
    queryFn: () => getEvents({ filterValue: validatedFilterValue }),
  });

  return { isLoading, events, isRefetching, refetch, error };
}
