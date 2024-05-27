import { useMutation } from "@camonk/react-query";
import { bookEvent as bookEventApi } from "../../services/apiEvents";

export function useBookEvent() {
  const { mutate: bookEvent, isPending: isBookingEvent } = useMutation({
    mutationFn: bookEventApi,
    onSuccess: (response) => {
      return response;
    },
    onError: (err) => console.error(err.message),
  });

  return { bookEvent, isBookingEvent };
}
