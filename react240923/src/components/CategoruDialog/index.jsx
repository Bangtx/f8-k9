import React, {useState} from "react";
import {DialogTitle, Dialog, DialogContent, DialogActions, Button, DialogContentText, TextField, Box} from "@mui/material";
import '../../index.css'
import {v4} from 'uuid'

function WhiteBar() {
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

export default function ({show, onClose, width, reload}) {
    const [category, setCategory] = useState({
        id: v4(),
        name: '',
        orderNum: 1
    })

    const onInput = (e) => {
        const newCategory = {...category}
        newCategory[e.target.name] = e.target.value
        setCategory({ ...newCategory })
    }

    const onSave = async () => {
        // save category
        const response = await fetch('http://localhost:3000/categories', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(category),
        })

        if (response.ok) {
            await reload()
            onClose()
        }
    }

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
                    <WhiteBar/>
                    <TextField className={'pt-2'} fullWidth placeholder="Name" name="name" onInput={onInput}/>
                    <WhiteBar/>
                    <TextField className={'pt-2'} fullWidth placeholder="Order num" name="orderNum" onInput={onInput}/>
                    <WhiteBar/>
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