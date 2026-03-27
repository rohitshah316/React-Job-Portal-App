import React from 'react'

const FilterJob = ({setTypeFilter,setLevelFilter}) => {
  return (
    <div className='flex flex-col items-center md:flex-row justify-around gap-2 '>

        {/* type filter */}
        <div className='flex  bg-indigo-900 rounded p-2 items-center '>
            <p>Type:</p>
            <select 
            onChange={(e)=>setTypeFilter(e.target.value)}
            className=' bg-blue-950 px-2 rounded-xl py-1 outline-none cursor-pointer'>
            <option value="All">All</option>
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Internship">Internship</option>
            <option value="Contract">Contract</option>
        </select>
        </div>
        {/* level filter */}
        <div className='flex  bg-indigo-900 rounded p-2 items-center '>
            <p>Level:</p>
            <select 
            onChange={(e)=>setLevelFilter(e.target.value)}
            className=' bg-blue-950 px-2 rounded-xl py-1 outline-none cursor-pointer'>
            <option value="All">All</option>
            <option value="Intern">Intern</option>
            <option value="Junior">Junior</option>
            <option value="Mid-level">Mid-level</option>
            <option value="Senior">Senior</option>
        </select>
        </div>
    </div>
  )
}

export default FilterJob