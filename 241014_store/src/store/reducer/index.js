import inputtingReducer from "./inputtingReducer.js";
import searchReducer from "./searchReducer.js";
import jobsReducer from "./jobsReducer.js";

const reducer = (state, action) => {
    return {
        inputtingJob: inputtingReducer(state.inputtingJob, action),
        searchString: searchReducer(state.searchString, action),
        jobs: jobsReducer(state.jobs, action)
    }
}

export default reducer