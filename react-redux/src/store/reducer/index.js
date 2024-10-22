import jobsReducer from './jobs.js'
import inputtingJobReducer from "./inputtingJob.js";


const initState =  {
    count: 0,
    jobs: [],
    inputtingJob: {
        name: '',
        priority: 'LOW'
    }
}

const reducer = (state = initState, action) => {
    return {
        jobs: jobsReducer(state.jobs, action),
        inputtingJob: inputtingJobReducer(state.inputtingJob, action)
    }
}

export default reducer
