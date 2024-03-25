import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './components/pages/Home'
import AboutPage from './components/pages/AboutPage'
import { Route, Routes } from 'react-router-dom'
import ProjectPage from './components/pages/ProjectPage'
import Contact from './components/pages/ContactPage'
import './App.css'


const App = () => {
  return (

    <div>
      <div className='bg-[#0f0f0f] text-white'>
        <div className='max-w-[1150px] mx-auto '>
          <Nav />
          <Routes>
            <Route path='/' element={<Home />} />

            <Route path='/about' element={<AboutPage />} />
            <Route path='/project-page' element={<ProjectPage />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App
