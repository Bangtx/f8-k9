import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import searchStrSlice from "./searchStr.js";

// omit imports and state

export const fetchJobs = createAsyncThunk('jobs/fetchJobs', async (_, {rejectWithValue}) => {
    try {
        const response = await fetch('http://localhost:3000/jobs')
        return await response.json()
    } catch (e) {
        return rejectWithValue(e)
    }
})


const jobsSlice = createSlice({
    name: 'jobs',
    initialState: [],
    reducers: {
        save: (state, action) => {
            console.log('vao day', action)
            state.push(action.payload)
        },
        init: (state, action) => {
            return action.payload
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchJobs.pending, (state, action) => {
                console.log('pending')
            })
            .addCase(fetchJobs.fulfilled, (state, action) => {
                console.log('done', action)
                // state = action.payload
                // console.log(state)
                return action.payload
            })
    }
})

const jobsThunkFunction = () => {
    console.log('getState()')
    return async function fetchTodoByIdThunk(dispatch, getState) {
        const response = await fetch('http://localhost:3000/jobs')
        console.log('vao day di em', response)
        dispatch(jobsSlice.actions.init(await response.json()))
    }
}


export default jobsSlice
