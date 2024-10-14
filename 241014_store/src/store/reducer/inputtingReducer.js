export default function (state, action) {
    switch (action.type) {
        case 'inputtingJob/name/update':
            return {...state, name: action.payload}
        case 'inputtingJob/priority/update':
            return {...state, priority: action.payload.name}
        default:
            return state
    }
}