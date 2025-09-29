import React, { useEffect, useRef, useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Services from './components/Services'
import Work from './components/Work'
import Team from './components/Team'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import './components/Navbar.css'


function App() {

  const current_theme = localStorage.getItem('current_theme')
  const [theme, setTheme] = useState(current_theme ? current_theme : 'light')
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    localStorage.setItem('current_theme', theme)
  },[theme])

  return (
    <div className={`main ${theme} py-[0.1px] relative overflow-x-hidden`}>
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} theme={theme} setTheme={setTheme} />
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen}/>
      <Home theme={theme} />
      <Services theme={theme}/>
      <Work />
      <Team />
      <Contact />
      <Footer theme={theme} setTheme={setTheme}/>
    </div>
  )
}

export default App
