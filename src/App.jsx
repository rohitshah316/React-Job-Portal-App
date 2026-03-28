import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Layout/Navbar'
import About from './pages/About'
import SavedJobs from './pages/SavedJobs'
import JobDetails from './pages/JobDetails'
import { SavedJobProvider } from './context/SavedJobContext'
import NotFound from './pages/NotFound'
import Footer from './components/layout/Footer'
const App = () => {
  return (
   <SavedJobProvider>
     <BrowserRouter>
    <div className='flex flex-col min-h-screen'>
      <Navbar/>
   <div className='flex-1'>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/savedjobs' element={<SavedJobs/>}/>
      <Route path='/jobdetails/:id' element={<JobDetails/>}/>
      <Route path='/*' element={<NotFound/>}/>
    </Routes>
   </div>
    <Footer/>
    </div>
    </BrowserRouter>
   </SavedJobProvider>
  )
}

export default App