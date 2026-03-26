import React from 'react'

const Pagination = ({totalPages,currentPage,setCurrentPage}) => {

    const pages=[];

    for(let i=1;i<=totalPages;i++){
        pages.push(i);
    }
  return (
    <div className='flex justify-center py-2 mt-10 bg-gray-900 rounded overflow-auto pagination-container'>
        {pages.map((page)=>(
            <button key={page} 
            onClick={()=>setCurrentPage(page)}
            className={`${currentPage===page?'bg-green-500':''} px-4 py-2 font-bold border cursor-pointer hover:bg-green-900`}>{page}</button>
        ))}
    </div>
  )
}

export default Pagination