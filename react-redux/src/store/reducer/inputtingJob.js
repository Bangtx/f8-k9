import {createSlice} from '@reduxjs/toolkit'
// const reducer = (state, action) => {
//     switch (action.type) {
//         case 'inputtingJob/name/update':
//             return {...state.inputtingJob, name: action.payload}
//         case 'inputtingJob/priority':
//             return {...state.inputtingJob, priority: action.payload}
//         default:
//             return state
//     }
// }

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