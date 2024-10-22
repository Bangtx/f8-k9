const reducer = (state, action) => {
    switch (action.type) {
        case 'inputtingJob/name/update':
            return {...state.inputtingJob, name: action.payload}
        case 'inputtingJob/priority/update':
            return {...state.inputtingJob, priority: action.payload}
        default:
            return state
    }
}

export default reducer