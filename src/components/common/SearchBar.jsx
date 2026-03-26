import React from 'react'
import { IoSearch } from 'react-icons/io5'

const SearchBar = () => {
  return (
    <form>
        <div className='flex justify-center mx-auto my-6 max-w-3xl'>
            <input type="text" placeholder='Search Jobs...' className='bg-indigo-900 px-6 py-3 rounded-l-2xl flex-1 outline-none'/>
        <button type='submit' className='cursor-pointer bg-blue-950 rounded-r-2xl px-6 '><IoSearch/></button>
        </div>
    </form>
  )
}

export default SearchBar