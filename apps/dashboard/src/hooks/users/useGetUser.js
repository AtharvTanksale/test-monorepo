import { useParams } from "@camonk/router";
import { useQuery } from "@camonk/react-query";
import { getUserById } from "../../services/apiUsers";

export function useGetUser() {
  const { userId } = useParams();

  const {
    isLoading,
    data: user,
    error,
    refetch,
  } = useQuery({
    queryKey: ["user", userId],
    queryFn: () => getUserById(userId),
  });

  return { isLoading, user, error, refetch };
}
