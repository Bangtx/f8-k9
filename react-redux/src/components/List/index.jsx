import {useSelector} from "react-redux";
import {getJobs} from '../../store'

export default function () {
    const jobs = useSelector(getJobs)
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