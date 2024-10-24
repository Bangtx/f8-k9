const onIncreaseCount = (payload = 1) => {
    return {
        type: 'count/increment',
        payload: payload
    }
}

const onDecreaseCount = (payload = 1) => {
    return {
        type: 'count/decrement',
        payload: payload
    }
}

const onUpdateInputtingJob = (name, payload) => {
    return {
        type: `inputtingJob/${name}/update`,
        payload: payload
    }
}

const onSaveJob = (payload) => {
    return {
        type: `jobs/save`,
        payload: payload
    }
}


const onInputSearchStr = (payload) => {
    return {
        type: 'searchStr/input',
        payload: payload
    }
}


export {
    onInputSearchStr,
    onIncreaseCount,
    onDecreaseCount,
    onUpdateInputtingJob,
    onSaveJob
}