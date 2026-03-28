import React from 'react'
import { AiFillDollarCircle } from "react-icons/ai";
import { FaClock, FaLocationArrow } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import {Link} from 'react-router-dom'
import { useSavedJobContext } from '../../context/SavedJobContext';

const JobCard = ({job}) => {

    const {saveJob,removeJob,isSaved}=useSavedJobContext();
    const saved=isSaved(job.id);

    const onSavedClick=(e)=>{
      e.preventDefault();
      if(saved){
        removeJob(job.id);
      }else{
        saveJob(job);
      }
    }

  return (
    <div className='p-6 bg-gray-700 rounded-sm text-gray-400 hover:-translate-y-1 cursor-pointer'>
                    <h3 className='text-2xl font-semibold text-white'>{job.title}</h3>
                    <p className='flex items-center'><FaLocationArrow/>: {job.location}</p>
                    <p className='flex items-center'><AiFillDollarCircle />: {job.salary}</p>
                    <p className='flex items-center'><FaClock/>: {job.postedDate}</p>
                    <p className='flex items-center'><MdWork/>: {job.level}</p>



                    <div className='flex font-bold text-white gap-1 mt-2'>
                        <button className='bg-blue-500 hover:bg-blue-900 flex-1 py-1 rounded-xl cursor-pointer'><Link to={`jobdetails/${job.id}`}>Apply Now</Link></button>
                      
                        <button onClick={onSavedClick} className={` flex-1 py-1 rounded-xl cursor-pointer hover:bg-gray-800 ${saved?'bg-green-500 hover:bg-green-800':'border'}`}>{saved?<span className=''>Saved Job</span>:'Save Job'}</button>
                    </div>
                </div>
  )
}

export default JobCard