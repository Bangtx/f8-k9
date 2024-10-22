const reducer = (state, action) => {
    switch (action.type) {
        case 'jobs/save':
            return [...state, action.payload]
        default:
            return state
    }
}

export default reducer