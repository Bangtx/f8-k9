import {Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField} from "@mui/material";
import React from "react";


export function WhiteBar() {
    return (
        <Box
            sx={(theme) => ({
                height: 20,
                backgroundColor: 'white',
                ...theme.applyStyles('dark', {
                    backgroundColor: 'rgb(255 132 132 / 25%)',
                }),
            })}
        />
    );
}

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