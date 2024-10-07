import DialogContainer from "../DialogContainer/index.jsx";
import {Box, TextField, Button} from "@mui/material";
import React, {useEffect, useState} from "react";

function WhiteBar() {
    return (
        <Box
            sx={(theme) => ({
                height: 20,
                backgroundColor: 'white'
            })}
        />
    );
}

export default function({category, show, onClose, width, reload}) {
    const [curCategory, setCurCategory] = useState({
        id: null,
        name: '',
        orderNum: '',
    })

    useEffect(() => {
        setCurCategory({...category})
    }, [category]);

    const onInput = (e) => {
        const newCategory = {...curCategory}
        newCategory[e.target.name] = e.target.value
        setCurCategory({ ...newCategory })
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
            <DialogContainer show={show} onSave={onSave} onClose={onClose} width={width}>
                <WhiteBar/>
                <TextField
                    className={'pt-2'}
                    fullWidth
                    placeholder="Name"
                    name="name"
                    onInput={onInput}
                    value={curCategory?.name}
                />
                <WhiteBar/>
                <TextField
                    className={'pt-2'}
                    fullWidth
                    placeholder="Order num"
                    name="orderNum"
                    onInput={onInput}
                    value={curCategory?.orderNum}
                />
                <WhiteBar/>
            </DialogContainer>
        </>
    )
}