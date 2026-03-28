import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Layout/Navbar'
import About from './pages/About'
import SavedJobs from './pages/SavedJobs'
import JobDetails from './pages/JobDetails'
import { SavedJobProvider } from './context/SavedJobContext'
const App = () => {
  return (
   <SavedJobProvider>
     <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/savedjobs' element={<SavedJobs/>}/>
      <Route path='/jobdetails/:id' element={<JobDetails/>}/>
    </Routes>
    </BrowserRouter>
   </SavedJobProvider>
  )
}

export default App