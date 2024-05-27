import { axios } from "@camonk/axios";
import { toast } from "@camonk/toast";

const RAZORPAY_KEY_ID = import.meta.env.RAZORPAY_KEY_ID;

export async function createOrder() {
  try {
    const response = await axios.post("/payment/createOrder", {
      paymentFor: "events",
      itemId: "item_id_123",
    });

    const data = response.data.data;
    return data;
  } catch (error) {
    console.error("Error Creating Order", error);
    throw new Error(error);
  }
}

export async function verifyPayment(orderId, paymentId, signature) {
  try {
    const response = await axios.post("/payment/verifyPayment", {
      orderId,
      paymentId,
      signature,
    });
    const data = response.data;
    return data;
  } catch (error) {
    console.error("Error Verifying payment", error);
    throw new Error(error);
  }
}

export async function handlePayment({
  orderId,
  amount,
  currency,
  userName,
  userEmail,
  userPhone,
  paymentForDescription,
}) {
  return new Promise((resolve, reject) => {
    try {
      const options = {
        key: RAZORPAY_KEY_ID,
        amount: amount,
        currency: currency,
        name: "Tools CA Monk",
        description: paymentForDescription,
        order_id: orderId,
        handler: async function (response) {
          try {
            const result = await verifyPayment(
              orderId,
              response.razorpay_payment_id,
              response.razorpay_signature
            );
            if (result.status === "SUCCESS") {
              toast.success("Payment Successful!");
              resolve({
                status: "success",
                paymentId: response.razorpay_payment_id,
                signature: response.razorpay_signature,
              });
            } else {
              toast.error("Payment Failed!");
              reject(new Error("Payment failed"));
            }
          } catch (verificationError) {
            toast.error("Payment Verification Failed!");
            reject(verificationError);
          }
        },
        prefill: {
          name: userName,
          email: userEmail,
          contact: userPhone,
        },
        theme: {
          color: "#453fe1",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Error handlePayment", error);
      reject(error);
    }
  });
}
