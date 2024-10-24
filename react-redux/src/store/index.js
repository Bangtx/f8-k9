import jobsReducer from './reducer/jobs.js'
import inputtingJobReducer from "./reducer/inputtingJob.js";
import searchStrReducer from "./reducer/searchStr.js";
import {configureStore} from '@reduxjs/toolkit'

const reducer = configureStore({
    reducer: {
        searchStr: searchStrReducer.reducer,
        jobs: jobsReducer.reducer,
        inputtingJob: inputtingJobReducer.reducer
    }
})
export default reducer
export * from './action.js'
export * from './selector.js'