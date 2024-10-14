import './App.css'
import AppContext, {reducer} from './store'
import {useReducer} from 'react'
import {Form, List, Search} from "./components";
import {Box} from "@mui/material";

const initState = {
    jobs: [{
        name: 'test 1',
        priority: 'HIGH',
    }],
    inputtingJob: {
        name: '',
        priority: 'LOW',
    },
    searchString: '',
}

function App() {
    const [state, dispatch] = useReducer(
        reducer, { ...initState }
    )


    return (
        <AppContext.Provider value={{state, dispatch}}>
            <Box className={'content'}>
                <Search/>
                <List/>
                <Form/>
            </Box>
        </AppContext.Provider>
    )
}

export default App
