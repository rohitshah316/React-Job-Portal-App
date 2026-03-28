import React from 'react'
import { useSavedJobContext } from '../context/SavedJobContext'
import JobCard from '../components/common/JobCard'

const SavedJobs = () => {

  const {savedJobs} = useSavedJobContext()
  return (
    <section className='mt-10 max-w-4xl mx-auto px-12 py-2 gap-6'>
      <h2 className='text-3xl font-bold'>Saved Jobs</h2>

      {savedJobs.length===0 &&  <p className='text-center text-xl mt-10 text-blue-600'>No Saved Job.</p>}


      {savedJobs.length>0 &&  <p >{savedJobs.length} Jobs Saved.</p>}


      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-6'>
        {savedJobs.map(job=>(
          <JobCard job={job}/>
        ))}
      </div>
    </section>
  )
}

export default SavedJobs