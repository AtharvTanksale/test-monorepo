import { toast } from "@camonk/toast";
import { useMutation, useQueryClient } from "@camonk/react-query";
import { editEvent as openEventApi } from "../../services/apiEvents";

export function useOpenEvent() {
  const queryClient = useQueryClient();

  const { mutate: openEvent, isPending: isOpening } = useMutation({
    mutationFn: ({ eventId, editedEvent }) => {
      return openEventApi(eventId, editedEvent);
    },
    onSuccess: () => {
      toast.success("Event successfully opened");
      queryClient.invalidateQueries({ queryKey: ["events"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isOpening, openEvent };
}
