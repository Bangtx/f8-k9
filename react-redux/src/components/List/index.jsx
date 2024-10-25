import {useSelector, useDispatch} from "react-redux";
import {getJobs} from '../../store'
import {useEffect} from "react";
import {jobsThunkFunction} from "../../store/reducer/jobs.js";

export default function () {
    const jobs = useSelector(getJobs)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(jobsThunkFunction)
    }, []);
    return (
        <>
            <p>List Job</p>
            <ul>
                {
                    jobs.map((job, index) => {
                        return (
                            <li key={index}>{job.name}</li>
                        )
                    })
                }
            </ul>
        </>
    )
}