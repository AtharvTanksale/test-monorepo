import { useMutation } from "@camonk/react-query";
import { handlePayment as handlePaymentApi } from "../services";

export function useHandlePayment() {
  const { mutate: handlePayment, isPending: isHandlingPayment } = useMutation({
    mutationFn: handlePaymentApi,
    onSuccess: (response) => {
      return response;
    },
    onError: (err) => console.error(err.message),
  });

  return { handlePayment, isHandlingPayment };
}
