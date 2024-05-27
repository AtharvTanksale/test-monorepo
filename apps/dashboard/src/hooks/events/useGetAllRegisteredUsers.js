import { useQuery } from "@camonk/react-query";
import { getAllRegisteredUsers } from "../../services/apiEvents";

export function useGetAllRegisteredUsers({ eventId }) {
  console.log("useGetAllRegisteredUsers", eventId);

  const {
    isLoading,
    data: eventUsers,
    refetch,
    isRefetching,
    error,
  } = useQuery({
    queryKey: ["eventUsers"],
    queryFn: () => getAllRegisteredUsers(eventId),
  });

  return { isLoading, eventUsers, refetch, isRefetching, error };
}
