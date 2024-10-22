import {useSelector} from "react-redux";

const getCount = (state) => state.count
const getJobs = (state) => state.jobs
const getInputtingJob = (state) => state.inputtingJob

export {getCount, getJobs, getInputtingJob}