import {createSlice} from '@reduxjs/toolkit'


const searchStrSlice = createSlice({
    name: 'searchStr',
    initialState: '',
    reducers: {
        input: (state, action) => {
            return action.payload
        }
    }
})

// searchStr/input

// const reducer = (state, action) => {
//     switch (action.type) {
//         case 'searchStr/input':
//             return action.payload
//         default:
//             return state
//     }
// }

export default searchStrSlice