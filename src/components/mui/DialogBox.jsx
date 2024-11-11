import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

function DialogBox({
  openDialog,
  title,
  text,
  confirmBtnText,
  confirmBtnAction,
  cancelBtnText,
  cancelBtnAction,
}) {
  const [open, setOpen] = useState(openDialog);

  const handleClose = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    if (cancelBtnAction) {
      cancelBtnAction();
    }

    handleClose();
  };

  const handleConfirm = () => {
    confirmBtnAction();
    handleClose();
  };

  return (
    <Dialog open={open} className="MuiDialog-paperWidthLg">
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {text}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCancel}>{cancelBtnText}</Button>
        <Button className="p-8" autoFocus onClick={handleConfirm}>
          {confirmBtnText}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default DialogBox;
