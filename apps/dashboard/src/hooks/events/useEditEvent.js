import { toast } from "@camonk/toast";
import { useMutation, useQueryClient } from "@camonk/react-query";
import { editEvent as editEventApi } from "../../services/apiEvents";

export function useEditEvent() {
  const queryClient = useQueryClient();

  const { mutate: editEvent, isPending: isEditing } = useMutation({
    mutationFn: ({ eventId, editedEvent }) => {
      return editEventApi(eventId, editedEvent);
    },

    onSuccess: () => {
      toast.success("Event successfully edited");
      queryClient.invalidateQueries({ queryKey: ["events"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isEditing, editEvent };
}
