import {createSlice} from '@reduxjs/toolkit'
import searchStrSlice from "./searchStr.js";

const jobsSlice = createSlice({
    name: 'jobs',
    initialState: [],
    reducers: {
        save: (state, action) => {
            console.log('vao day', action)
            state.push(action.payload)
        }
    }
})

const jobsThunkFunction = (dispatch, getState) => {
    console.log(getState())
    return async function fetchTodoByIdThunk(dispatch, getState) {
        const response = await fetch('https://localhost:3000/jobs')
        dispatch(jobsSlice.actions.save(response.todos))
    }
}


export default jobsSlice
export {jobsThunkFunction}
