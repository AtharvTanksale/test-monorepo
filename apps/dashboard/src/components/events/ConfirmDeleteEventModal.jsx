import {
  Box,
  Button,
  Stack,
  Typography,
} from "@camonk/design-system/components";
import { Modal } from "@camonk/design-system/custom-components";

function ConfirmDeleteEventModal({ open, handleClose, handleDeleteEvent }) {
  return (
    <Modal
      open={open}
      handleClose={handleClose}
      fullWidth={true}
      maxWidth={"sm"}
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
        <Typography variant="h4" textAlign="center" sx={{ textWrap: "pretty" }}>
          Confirm Event Deletion?
        </Typography>

        <Typography
          variant="body2"
          color="#b5b9be"
          sx={{ my: 2 }}
          textAlign="center"
        >
          Once the event is deleted, it cannot be restored!
        </Typography>

        <Stack
          direction="row"
          justifyContent="center"
          spacing={4}
          marginTop={2}
        >
          <Button
            variant="contained"
            color="error"
            sx={{ width: "fit-content", height: "40px" }}
            onClick={handleDeleteEvent}
          >
            Yes Delete!
          </Button>

          <Button
            variant="text"
            color="primary"
            sx={{ width: "fit-content", height: "40px" }}
            onClick={handleClose}
          >
            No Cancel
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
}

export default ConfirmDeleteEventModal;
