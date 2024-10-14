export default function (state, action) {
    switch (action.type) {
        case 'jobs/save':
            const jobs = [...state, action.payload]
            return jobs
        default:
            return state
    }
}