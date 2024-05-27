import { toast } from "@camonk/toast";
import { useMutation, useQueryClient } from "@camonk/react-query";
import { duplicateEvent as duplicateEventApi } from "../../services/apiEvents";

export function useDuplicateEvent() {
  const queryClient = useQueryClient();

  const { mutate: duplicateEvent, isPending: isDuplicating } = useMutation({
    mutationFn: duplicateEventApi,
    onSuccess: () => {
      toast.success("Event successfully duplicated");
      queryClient.invalidateQueries({ queryKey: ["events"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDuplicating, duplicateEvent };
}
