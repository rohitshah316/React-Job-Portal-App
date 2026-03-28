import React from 'react'
import { useParams } from 'react-router-dom'
import { jobs } from '../data/jobs';
import { Link } from 'react-router-dom';
import { useSavedJobContext } from '../context/SavedJobContext';

const JobDetails = () => {

   

  const { id } = useParams();

  const job = jobs.find(j => j.id === parseInt(id))



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

  if (!job) {
    return <h2 className='font-semibold text-center mt-10 text-red-500'>No Job Found</h2>
  }
  return (
    <section className='max-w-4xl px-12 py-2 mt-10 mx-auto'>

      <div className='bg-gray-800 px-4 py-6 rounded'>
       <div className='flex flex-col md:flex-row justify-between'>
          <div>
           <h2 className='text-3xl font-bold'>{job.title}</h2>
          <p>{job.company}</p>
         </div>
         <span>Posted On: <span className='text-sm text-gray-400'>{job.postedDate}</span></span>
       </div>


        <h3 className='text-2xl font-semibold mt-6'>Job Details</h3>
        <div className='grid grid-cols-2 gap-2 text-gray-400'>
          <span>Location: {job.location}</span>
          <span>Type: {job.type}</span>
       
          <span>Salary: {job.salary}</span>
          <span>Level: {job.level}</span>
          <span>Experience: {job.experience}</span>
        </div>

        <h3 className='text-2xl font-semibold mt-6'>Job Description</h3>
        <p className='text-gray-400'>{job.description}</p>


        <h3 className='text-2xl font-semibold mt-6 mb-2'>Skills</h3>
        <div className='flex flex-col items-start md:flex-row gap-2'>
          {job.skills.map(skill=>(
            <span className='px-2 bg-blue-600 rounded-2xl py-1'>{skill}</span>
          ))}
        </div>
        <h3 className='text-2xl font-semibold mt-6 mb-2'>Tags</h3>
        <div className='flex flex-col items-start md:flex-row gap-2'>
          {job.tags.map(tag=>(
            <span className='px-2 bg-gray-600 rounded-2xl py-1'>#{tag}</span>
          ))}
        </div>



        <div className='flex flex-col md:flex-row font-bold text-white gap-1 mt-6'>
                        <button className='bg-blue-500 hover:bg-blue-900 flex-1 py-1 rounded-xl cursor-pointer'>Apply Now</button>
                        <button onClick={onSavedClick} className={` flex-1 py-1 rounded-xl cursor-pointer hover:bg-gray-900 ${saved?'bg-green-500 hover:bg-green-800':'border'}`}>{saved?'Saved Job':'Save Job'}</button>
                    </div>
      </div>



      <Link to='/' className='bg-gray-600 font-semibold flex justify-center mt-6 rounded-2xl py-2 hover:bg-gray-700'>Go Back</Link>

    </section>
  )
}

export default JobDetails