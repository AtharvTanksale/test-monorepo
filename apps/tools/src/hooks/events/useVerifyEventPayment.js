import { useMutation } from "@camonk/react-query";
import { verifyEventPayment as verifyEventPaymentApi } from "../../services/apiEvents";

export function useVerifyEventPayment() {
  const { mutate: verifyEventPayment, isPending: isVerifyingEventPayment } =
    useMutation({
      mutationFn: verifyEventPaymentApi,
      onSuccess: (response) => {
        return response;
      },
      onError: (err) => console.error(err.message),
    });

  return { verifyEventPayment, isVerifyingEventPayment };
}
