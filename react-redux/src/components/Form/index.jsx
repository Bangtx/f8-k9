import {useSelector, useDispatch} from "react-redux";
import {getInputtingJob, onUpdateInputtingJob, onSaveJob} from '../../store'

export default function () {
    const dispatch = useDispatch()
    const inputtingJob = useSelector(getInputtingJob)

    const onChange = (e) => {
        // e.target.name = name || priority
        const {name, value} = e.target
        dispatch(onUpdateInputtingJob(name, value))
    }

    const onSave = () => {
        dispatch(onSaveJob(inputtingJob))
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