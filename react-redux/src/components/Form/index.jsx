import {useSelector, useDispatch} from "react-redux";
import {getInputtingJob, inputtingJobReducer, jobsReducer} from '../../store'

export default function () {
    const dispatch = useDispatch()
    const inputtingJob = useSelector(getInputtingJob)

    const onChange = (e) => {
        // e.target.name = name || priority
        const {name, value} = e.target
        dispatch(inputtingJobReducer.actions[name](value))
    }

    const onSave = () => {
        dispatch(jobsReducer.actions.save(inputtingJob))
    }

    return (
        <>
            <input
                type={'text'}
                name={'name'}
                value={inputtingJob.name}
                onChange={onChange}
            />
            <select name={'priority'} onChange={onChange}>
                <option value={'High'}>High</option>
                <option value={'Medium'}>Medium</option>
                <option value={'Low'}>Low</option>
            </select>
            <button onClick={onSave}>Save</button>
        </>
    )
}