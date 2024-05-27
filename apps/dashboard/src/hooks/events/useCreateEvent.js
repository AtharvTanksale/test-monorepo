import { toast } from "@camonk/toast";
import { useMutation, useQueryClient } from "@camonk/react-query";
import { createEvent as createEventApi } from "../../services/apiEvents";

export function useCreateEvent() {
  const queryClient = useQueryClient();

  const { mutate: createEvent, isPending: isCreating } = useMutation({
    mutationFn: createEventApi,
    onSuccess: () => {
      toast.success("New event successfully created");
      queryClient.invalidateQueries({ queryKey: ["events"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, createEvent };
}
