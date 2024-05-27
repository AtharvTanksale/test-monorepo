import { axios } from "@camonk/axios";
import { toast } from "@camonk/toast";

export async function bookEvent(eventId) {
  const toastId = toast.loading("Reserving your slot...");
  try {
    const response = await axios.post(`/events/register/${eventId}`);
    const data = response.data;
    toast.dismiss(toastId);

    return data;
  } catch (error) {
    console.error(error);
    toast.error(`Could not book event, Try again later!`, {
      id: toastId,
    });
    throw new Error("Event could not be booked");
  }
}

export async function verifyEventPayment({
  eventId,
  orderId,
  paymentId,
  signature,
}) {
  const toastId = toast.loading("Reserving your spot...");
  try {
    const response = await axios.post(`/events/verifypayment/${eventId}`, {
      orderId,
      paymentId,
      signature,
    });
    const data = response.data;
    toast.dismiss(toastId);

    return data;
  } catch (error) {
    console.error(error);
    toast.error(`Could not verify payment!`, {
      id: toastId,
    });
    throw new Error("Payment could not be verified for the event");
  }
}
