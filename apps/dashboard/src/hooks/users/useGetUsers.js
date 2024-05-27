import { useQuery } from "@camonk/react-query";
import { getUsers } from "../../services/apiUsers";

export function useGetUsers() {
  const {
    isLoading,
    data: users,
    error,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  return { isLoading, users, error, refetch };
}
