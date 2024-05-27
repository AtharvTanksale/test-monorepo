import { toast } from "@camonk/toast";
import { useMutation, useQueryClient } from "@camonk/react-query";
import { deleteEvent as deleteEventApi } from "../../services/apiEvents";

export function useDeleteEvent() {
  const queryClient = useQueryClient();

  const { mutate: deleteEvent, isPending: isDeleting } = useMutation({
    mutationFn: deleteEventApi,
    onSuccess: () => {
      toast.success("Event successfully deleted");
      queryClient.invalidateQueries({ queryKey: ["events"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteEvent };
}
