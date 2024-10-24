import jobsReducer from './jobs.js'
import inputtingJobReducer from "./inputtingJob.js";
import searchStrReducer from "./searchStr.js";
import {configureStore} from '@reduxjs/toolkit'


const initState =  {
    count: 0,
    jobs: [],
    searchStr: '',
    inputtingJob: {
        name: '',
        priority: 'LOW'
    }
}

// const reducer = configureStore({
//     reducer: {
//         searchStr: searchReducer,
//         jobs: jobsReducer,
//         inputtingJob: inputtingJobReducer
//     }
// })

const reducer = (state = initState, action) => {
    return {
        searchStr: searchStrReducer(state.searchStr, action),
        jobs: jobsReducer(state.jobs, action),
        inputtingJob: inputtingJobReducer(state.inputtingJob, action)
    }
}

export default reducer
