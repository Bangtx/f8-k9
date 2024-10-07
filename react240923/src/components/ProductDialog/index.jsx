import React, {useEffect, useState} from "react";
import {TextField, Box, Button, Autocomplete} from "@mui/material";
import '../../index.css'
import DialogContainer, {WhiteBar} from "../DialogContainer/index.jsx";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import {styled} from "@mui/material/styles";
import {readFile} from '../../utils'
// import {Image} from "@mui/icons-material";


const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

export default function ({product, show, onClose, width, reload}) {
    const [url, setUrl] = useState(null)
    const [curProduct, setCurProduct] = useState({
        id: null,
        name: '',
        orderNum: '',
    })
    const [categories,setCategories] = useState([])

    const getCategories = async () => {
        // fetch categories from server
        const response = await fetch('http://localhost:3000/categories')
        setCategories(await response.json())
    }

    useEffect(() => {
        setCurProduct({...product})
        getCategories()
    }, [product]);

    const onInput = (e) => {
        const newProduct = {...curProduct}
        newProduct[e.target.name] = e.target.value
        setCurProduct({ ...newProduct })
    }

    const onSave = async () => {
        console.log(curProduct)
        // save product
        // const response = await fetch('http://localhost:3000/products', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(product),
        // })
        //
        // if (response.ok) {
        //     await reload()
        //     onClose()
        // }
    }

    const onUploadFile = async (event) => {
        console.log(event.target.files)
        const selectedFile = event.target.files[0];
        const payload = await readFile(selectedFile);

        setUrl(URL.createObjectURL(selectedFile))
    }
    
    return (
        <>
            <DialogContainer show={show} onSave={onSave} onClose={onClose} width={width}>
                <img src={url}/>
                <Button
                    component="label"
                    role={undefined}
                    variant="contained"
                    tabIndex={-1}
                    startIcon={<CloudUploadIcon />}
                >
                    Upload files
                    <VisuallyHiddenInput
                        type="file"
                        onChange={onUploadFile}
                        multiple
                    />
                </Button>

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
                <Autocomplete
                    disablePortal
                    getOptionLabel={(option) => option.name}
                    getOptionKey={(option) => option.id}
                    options={categories}
                    renderInput={(params) => <TextField {...params} label="Category" />}
                    onChange={(event, newValue) => {
                        const newProduct = {...curProduct}
                        newProduct.categoryId = newValue.id
                        setCurProduct({...newProduct })
                    }}
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