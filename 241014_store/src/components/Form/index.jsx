import {Autocomplete, Button, TextField} from "@mui/material";
import {useContext} from "react";
import AppContext from "../../store/index.js";

const options = [
    {name: 'HIGH'},
    {name: 'MEDIUM'},
    {name: 'LOW'},
]

export default function () {
    const {dispatch} = useContext(AppContext)

    const onInput = (event) => {

    }

    const onSave = () => {
        // save logic here
        dispatch('abc')
    }

    return (
        <>
            <TextField
                label={'name'}
                fullWidth
                onChange={(e) => dispatch({action: 'inputtingJob/name/update', payload: e.target.value})}
            />

            <Autocomplete
                disablePortal
                getOptionLabel={(option) => option.name}
                options={options}
                fullWidth
                renderInput={(params) => <TextField {...params} label="Priority" />}
                onChange={(event, newValue) => {
                    dispatch({action: 'inputtingJob/priority/update', payload: newValue})
                }}
            />
            <Button onClick={onSave}>Save</Button>
        </>
    )
}