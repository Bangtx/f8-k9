import {useSelector, useDispatch} from "react-redux";
import {getJobs} from '../../store'
import {useEffect} from "react";
import {fetchJobs} from "../../store/reducer/jobs.js";

export default function () {
    const jobs = useSelector(getJobs)

    console.log('jobs', jobs)
    const dispatch = useDispatch()

    useEffect(() => {
        // dispatch(jobsThunkFunction())
        dispatch(fetchJobs())
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