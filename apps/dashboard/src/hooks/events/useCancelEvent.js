import { toast } from "@camonk/toast";
import { useMutation, useQueryClient } from "@camonk/react-query";
import { cancelEvent as cancelEventApi } from "../../services/apiEvents";

export function useCancelEvent() {
  const queryClient = useQueryClient();

  const { mutate: cancelEvent, isPending: isCanceling } = useMutation({
    mutationFn: cancelEventApi,
    onSuccess: () => {
      toast.success("Event successfully canceled");
      queryClient.invalidateQueries({ queryKey: ["events"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCanceling, cancelEvent };
}
