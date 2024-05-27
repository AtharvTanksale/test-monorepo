import { useParams } from "@camonk/router";
import { useQuery } from "@camonk/react-query";
import { getEvent } from "../services";

export function useEvent({ eventId }) {
  const {
    isLoading,
    data: event,
    error,
  } = useQuery({
    queryKey: ["event", eventId],
    queryFn: () => getEvent(eventId),
  });

  return { isLoading, event, error };
}
