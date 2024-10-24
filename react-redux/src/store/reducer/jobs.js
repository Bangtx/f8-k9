import {createSlice} from '@reduxjs/toolkit'


// const reducer = (state, action) => {
//     switch (action.type) {
//         case 'jobs/save':
//             return [...state, action.payload]
//         default:
//             return state
//     }
// }

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

export default jobsSlice
