import AppContext from "../../store/index.js";
import {useContext} from "react";


export default function () {
    const {state} = useContext(AppContext)
    const {jobs} = state

    return (
        <>
            <p>List component</p>
            <ul>
                {
                    jobs.map((job, index) => {
                        return (
                            <li key={index}>{job.name} - {job.priority}</li>
                        )
                    })
                }
            </ul>
        </>
    )
}