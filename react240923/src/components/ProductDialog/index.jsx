import React, {useEffect, useState} from "react";
import {DialogTitle, Dialog, DialogContent, DialogActions, Button, DialogContentText, TextField, Box} from "@mui/material";
import '../../index.css'
import DialogContainer from "../DialogContainer/index.jsx";


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

export default function ({product, show, onClose, width, reload}) {

    const [curProduct, setCurProduct] = useState({
        id: null,
        name: '',
        orderNum: '',
    })

    useEffect(() => {
        setCurProduct({...product})
    }, [product]);

    const onInput = (e) => {
        const newProduct = {...curProduct}
        newProduct[e.target.name] = e.target.value
        setCurProduct({ ...newProduct })
    }

    const onSave = async () => {
        // save product
        const response = await fetch('http://localhost:3000/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(product),
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
                    value={curProduct.name || null}
                />
                <WhiteBar/>
                <TextField
                    className={'pt-2'}
                    fullWidth
                    placeholder="Category"
                    name="Category"
                    onInput={onInput}
                    value={curProduct.categoryId || null}
                />
                <WhiteBar/>
                <TextField
                    className={'pt-2'}
                    fullWidth
                    placeholder="Order Num"
                    name="Order Num"
                    onInput={onInput}
                    value={curProduct.orderNum || null}
                />
                <WhiteBar/>
            </DialogContainer>
        </>
    )
}