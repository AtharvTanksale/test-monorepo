import { forwardRef } from "react";
import { Dialog, Slide } from "../components";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Modal({ open, handleClose, fullWidth, maxWidth, children }) {
  return (
    <>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        fullWidth={fullWidth}
        maxWidth={maxWidth}
      >
        {children}
      </Dialog>
    </>
  );
}

export { Modal };
