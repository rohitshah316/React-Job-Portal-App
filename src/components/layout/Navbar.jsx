import React, { useState } from 'react'
import { IoClose, IoMenu } from 'react-icons/io5';
import { Link, NavLink } from 'react-router-dom'
const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className='bg-gray-900 p-5 text-white'>

            <div className='max-w-4xl mx-auto'>
                <div className='flex justify-between items-center'>
                <h1 className='font-bold text-3xl'>
                    <Link to='/'>React Job Portal App</Link>
                </h1>

                <ul className='hidden gap-2 md:flex'>
                    <NavLink className='hover:-translate-y-0.5' to='/'>Home</NavLink>
                    <NavLink className='hover:-translate-y-0.5' to='/savedjobs'>Saved Jobs</NavLink>
                    <NavLink className='hover:-translate-y-0.5' to='/about'>About</NavLink>

                </ul>

                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className='flex md:hidden text-3xl'>{menuOpen?<IoClose/>:<IoMenu/>}</button>
            </div>


            {menuOpen &&
                <ul className='flex flex-col md:hidden p-2 gap-2 mt-2 bg-gray-800 rounded'>
                    <NavLink onClick={() => setMenuOpen(false)} to='/'>Home</NavLink>
                    <NavLink onClick={() => setMenuOpen(false)} to='/savedjobs'>Saved Jobs</NavLink>
                    <NavLink onClick={() => setMenuOpen(false)} to='/about'>About</NavLink>
                </ul>
            }
            </div>



        </nav>
    )
}

export default Navbar