import React, { useState } from 'react'
import { jobs } from '../data/jobs'
import SearchBar from '../components/common/SearchBar'
import JobCard from '../components/common/JobCard'
import Pagination from '../components/common/Pagination'

const Home = () => {

    const postPerPage=6;
    const [currentPage,setCurrentPage]=useState(1);

    const lastPostIndex=currentPage*postPerPage;
    const firstPostIndex=lastPostIndex-postPerPage;
    const currentPosts=jobs.slice(firstPostIndex,lastPostIndex);

    const totalPages=Math.ceil(jobs.length/postPerPage);

  return (
    <section className='mt-10 max-w-4xl mx-auto px-12 py-2 gap-6'>
        


        <SearchBar/>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {currentPosts.map(job=>(
                <JobCard job={job} key={job.id}/>
            ))}
        </div>


        <Pagination totalPages={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
    </section>
  )
}

export default Home