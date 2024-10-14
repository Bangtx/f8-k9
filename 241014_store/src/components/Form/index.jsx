import {Autocomplete, Button, TextField} from "@mui/material";
import {useContext} from "react";
import AppContext from "../../store/index.js";

const options = [
    {name: 'HIGH'},
    {name: 'MEDIUM'},
    {name: 'LOW'},
]

export default function () {
    const {state, dispatch} = useContext(AppContext)

    console.log(1234, state.inputtingJob)

    const onInput = (event) => {

    }

    const onSave = () => {
        // save logic here
        dispatch({
            type: 'jobs/save', payload: state.inputtingJob
        })
    }

    return (
        <>
            <TextField
                value={state.inputtingJob.name}
                label={'name'}
                fullWidth
                onChange={(e) => dispatch({type: 'inputtingJob/name/update', payload: e.target.value})}
            />

            <Autocomplete
                disablePortal
                getOptionLabel={(option) => option.name}
                options={options}
                fullWidth
                renderInput={(params) => <TextField {...params} label="Priority" />}
                onChange={(event, newValue) => {
                    dispatch({type: 'inputtingJob/priority/update', payload: newValue})
                }}
            />
            <Button onClick={onSave}>Save</Button>
        </>
    )
}