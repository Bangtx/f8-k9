import {createSlice} from '@reduxjs/toolkit'

const inputtingJobSlice = createSlice({
    name: 'inputtingJob',
    initialState: {
        name: '',
        priority: 'LOW'
    },
    reducers: {
        name: (state, action) => {
            state.name = action.payload
        },
        priority: (state, action) => {
            state.priority = action.payload
        }
    }
})

export default inputtingJobSlice