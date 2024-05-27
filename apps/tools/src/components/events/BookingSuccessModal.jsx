import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { Box, Button, Typography } from "@camonk/design-system/components";
import { Modal } from "@camonk/design-system/custom-components";
import { Lottie, CheckAnimation } from "@camonk/design-system/animations";

function BookingSuccessModal({ open, handleClose, event }) {
  const [playAnimation, setPlayAnimation] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPlayAnimation(true);
    }, 300);

    return () => {
      clearTimeout(timer);
      setPlayAnimation(false);
    };
  }, [open]);

  function addToCalendar() {
    const { title, description, startTime, endTime } = event;

    const eventTitle = encodeURIComponent(title);
    const eventDetails = encodeURIComponent(description);
    const startDate = dayjs(startTime).format("YYYYMMDDTHHmmssZ"); // Format: YYYYMMDDTHHmmssZ
    const endDate = dayjs(endTime).format("YYYYMMDDTHHmmssZ");

    const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${eventTitle}&dates=${startDate}/${endDate}&details=${eventDetails}`;

    window.open(calendarUrl, "_blank");

    handleClose();
  }

  return (
    <Modal
      open={open}
      handleClose={handleClose}
      fullWidth={true}
      maxWidth={"xs"}
    >
      <Box
        sx={{
          p: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Lottie
          options={{
            autoplay: false,
            loop: false,
            animationData: CheckAnimation,
          }}
          isStopped={!playAnimation}
          width={250}
          height={250}
        />

        <Typography variant="h4" textAlign="center" sx={{ textWrap: "pretty" }}>
          Congratulations on Booking this event
        </Typography>

        <Typography
          variant="body2"
          color="#A2A7AE"
          sx={{ my: 2 }}
          textAlign="center"
        >
          Secure your spot now! Add this event to your calendar and ensure you
          dont miss out
        </Typography>

        <Button
          variant="contained"
          sx={{ width: "100%", height: "50px" }}
          onClick={addToCalendar}
        >
          Add to your Calendar
        </Button>

        <Button
          variant="text"
          color="primary"
          sx={{ mt: 1 }}
          onClick={handleClose}
        >
          Finish
        </Button>
      </Box>
    </Modal>
  );
}

export default BookingSuccessModal;
