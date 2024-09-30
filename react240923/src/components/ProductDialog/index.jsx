import React from "react";
import {DialogTitle, Dialog, DialogContent, DialogActions, Button, DialogContentText, TextField} from "@mui/material";

export default function ({show, onClose}) {
    return (
        <>
            <Dialog
                open={show}
                onClose={onClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Use Google's location service?"}
                </DialogTitle>
                <DialogContent>
                    <TextField/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={onClose}>Disagree</Button>
                    <Button onClick={onClose} autoFocus>
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}