import React, { useRef, useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Services from './components/Services'
import Work from './components/Work'
import Team from './components/Team'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'


function App() {
  const [theme, setTheme] = useState('light')
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='py-[0.1px] relative overflow-x-hidden'>
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} theme={theme} setTheme={setTheme} />
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen}/>
      <Home />
      <Services />
      <Work />
      <Team />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
