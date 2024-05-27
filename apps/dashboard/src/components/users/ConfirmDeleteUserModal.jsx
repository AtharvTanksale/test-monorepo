import {
  Box,
  Button,
  Stack,
  Typography,
} from "@camonk/design-system/components";
import { Modal } from "@camonk/design-system/custom-components";

function ConfirmDeleteUserModal({ open, handleClose, handleDeleteUser }) {
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
          Confirm User Deletion?
        </Typography>

        <Typography
          variant="body2"
          color="#b5b9be"
          sx={{ my: 2 }}
          textAlign="center"
        >
          Once the user is deleted, it cannot be restored!
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
            onClick={handleDeleteUser}
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

export default ConfirmDeleteUserModal;
