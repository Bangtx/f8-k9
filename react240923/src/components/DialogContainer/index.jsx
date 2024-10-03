import {Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField} from "@mui/material";
import React from "react";

export default function({ onSave, show, onClose, width, children}) {
    return (
        <>
            <Dialog
                open={show}
                onClose={onClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title" width={width}>
                    {"Create category"}
                </DialogTitle>
                <DialogContent>
                    {children}
                </DialogContent>
                <DialogActions>
                    <Button onClick={onClose}>Close</Button>
                    <Button onClick={onSave} autoFocus>
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}