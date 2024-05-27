import { useState } from "react";
import { useBookEvent } from "../../hooks/events/useBookEvent";
import { useTheme } from "@camonk/design-system";
import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Stack,
  Typography,
} from "@camonk/design-system/components";
import { HourglassEmpty as HourglassEmptyIcon } from "@camonk/design-system/icons";
import { useHandlePayment } from "@camonk/payment/hooks";
import BookingSuccessModal from "./BookingSuccessModal";
import { useSelector } from "@camonk/react-redux";
import { useVerifyEventPayment } from "../../hooks/events/useVerifyEventPayment";

function BookEvent({ event }) {
  const theme = useTheme();
  const { status, price, title, id: eventId } = event;
  const [open, setOpen] = useState(false);

  const user = useSelector((state) => state.auth);

  const { bookEvent, isBookingEvent } = useBookEvent();
  const { handlePayment } = useHandlePayment();
  const { verifyEventPayment } = useVerifyEventPayment();

  function handleClick() {
    bookEvent(eventId, {
      onSuccess: (response) => {
        if (response.data) {
          const { orderId, amount, currency } = response.data;
          const userName = `${user.firstName} ${user.lastName}`;
          const userEmail = user.email;
          const userPhone = user.phone;
          const paymentForDescription = `Payment of ₹${price} for ${title} event`;

          handlePayment(
            {
              orderId,
              amount,
              currency,
              userName,
              userEmail,
              userPhone,
              paymentForDescription,
            },
            {
              onSuccess: (response) => {
                const { paymentId, signature } = response;

                verifyEventPayment(
                  { eventId, orderId, paymentId, signature },
                  {
                    onSuccess: () => {
                      setOpen(true);
                    },
                  }
                );
              },
            }
          );
        } else {
          setOpen(true);
        }
      },
    });
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <>
      <Box
        sx={{
          border: `1px solid ${
            theme.palette.mode === "light" ? "#CECECE" : "#333333"
          }`,
          p: theme.spacing(8, 3, 2),
          borderRadius: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Button
          variant="contained"
          size="medium"
          sx={{ width: "100%" }}
          onClick={handleClick}
          disabled={status === "canceled" || status === "closed"}
        >
          {!price ? "Book This Event" : `Book This Event @ ₹${price}`}
        </Button>

        <Stack direction="row" justifyContent="space-between" sx={{ mt: 2.5 }}>
          <AvatarGroup>
            <Avatar
              alt="Remy Sharp"
              src="https://i.pravatar.cc/600"
              sx={{ width: 24, height: 24 }}
            />
            <Avatar
              alt="Travis Howard"
              src="https://i.pravatar.cc/500"
              sx={{ width: 24, height: 24 }}
            />
            <Avatar
              alt="Agnes Walker"
              src="https://i.pravatar.cc/300"
              sx={{ width: 24, height: 24 }}
            />
            <Avatar
              alt="Trevor Henderson"
              src="https://i.pravatar.cc/200"
              sx={{ width: 24, height: 24 }}
            />
            <Avatar
              alt="Trevor Henderson"
              src="https://i.pravatar.cc/100"
              sx={{ width: 24, height: 24 }}
            />
          </AvatarGroup>

          <Typography
            variant="caption"
            color="#FDA700"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <HourglassEmptyIcon fontSize="large" /> Only few slots left
          </Typography>
        </Stack>
      </Box>

      <BookingSuccessModal
        open={open}
        handleClose={handleClose}
        event={event}
      />
    </>
  );
}

export default BookEvent;
