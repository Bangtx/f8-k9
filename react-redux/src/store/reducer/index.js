import jobsReducer from './jobs.js'
import inputtingJobReducer from "./inputtingJob.js";
import searchStrReducer from "./searchStr.js";
import {configureStore} from '@reduxjs/toolkit'

const reducer = configureStore({
    reducer: {
        searchStr: searchStrReducer.reducer,
        jobs: jobsReducer.reducer,
        inputtingJob: inputtingJobReducer.reducer
    }
})
export default reducer
