import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Layout/Navbar'
import About from './pages/About'
import SavedJobs from './pages/SavedJobs'
const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/savedjobs' element={<SavedJobs/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App