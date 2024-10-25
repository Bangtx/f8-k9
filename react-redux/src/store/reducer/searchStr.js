import {createSlice} from '@reduxjs/toolkit'


const searchStrSlice = createSlice({
    name: 'searchStr',
    initialState: '',
    reducers: {
        input: (state, action) => {
            console.log('test', action)
            return action.payload
        }
    }
})



export default searchStrSlice

export {thunkFunction}