import React, { useState } from 'react'
import { jobs } from '../data/jobs'
import SearchBar from '../components/common/SearchBar'
import JobCard from '../components/common/JobCard'
import Pagination from '../components/common/Pagination'
import FilterJob from '../components/common/FilterJob'

const Home = () => {

    

    const postPerPage=4;
    const [currentPage,setCurrentPage]=useState(1);
  const [searchTerm,setSearchTerm]=useState('');
  const [appliedSearch,setAppliedSearch]=useState('');

  const [typeFilter,setTypeFilter]=useState("All");
  const [levelFilter,setLevelFilter]=useState("All");


  const filteredPosts=jobs.filter((job)=>{
    const searchMatch=job.title.toLowerCase().includes(appliedSearch.trim().toLowerCase());

    const typeMatch=(typeFilter==="All" || job.type===typeFilter);
    const levelMatch=(levelFilter==="All" || job.level===levelFilter)

    return searchMatch && typeMatch && levelMatch;
  })

    const lastPostIndex=currentPage*postPerPage;
    const firstPostIndex=lastPostIndex-postPerPage;
    const currentPosts=filteredPosts.slice(firstPostIndex,lastPostIndex);

    const totalPages=Math.ceil(filteredPosts.length/postPerPage);

  
    const handleSearch=(e)=>{
        e.preventDefault();
            
            setAppliedSearch(searchTerm)
          
    }

     
  return (
    <section className='mt-10 max-w-4xl mx-auto px-12 py-2 gap-6'>
        


        <SearchBar handleSearch={handleSearch} searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>

        <FilterJob setTypeFilter={setTypeFilter} setLevelFilter={setLevelFilter}/>

        {appliedSearch && filteredPosts.length>0 && <p>{filteredPosts.length} Jobs Available.</p>}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-2'>
            {currentPosts.map(job=>(
                <JobCard job={job} key={job.id}/>
            ))}
        </div>

        {filteredPosts.length===0 && <p>No Job Found.</p>}
        {totalPages>1 && <Pagination totalPages={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage}/>}
    </section>
  )
}

export default Home