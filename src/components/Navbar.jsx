import React, { useRef, useState } from 'react'
import assets from '../assets/assets'
import { FaArrowRight } from "react-icons/fa6";
import { MdOutlineNightlight } from "react-icons/md";
import { CgMenuRight } from "react-icons/cg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Navbar({isOpen, setIsOpen, theme, setTheme,}) {
  const navRef = useRef()

  useGSAP(() => {
    gsap.from(navRef.current,{opacity: 0, y: -100, duration: 1,})
  })

  return (
    <div ref={navRef} className='fixed w-full flex items-center md:justify-around justify-between md:px-10 px-4 md:py-4 py-2 bg-transparent backdrop-blur-2xl z-[10]'>
      <img className='w-36' src={theme === 'dark' ? assets.logo_dark : assets.logo} alt="" />

      <div className="md:flex gap-5 hidden transition-all">
        {/* {['home', 'service', 'our work', 'contact us'].map((elem,idx) => {
          return <a key={idx} href='#' className="capitalize text-[13px] hover:border-b-1 leading-[0.95] transition-all text-gray-500">{elem}</a>
        })} */}
        <a href='#' className="capitalize text-[13px] hover:border-b-1 leading-[0.95] transition-all text-gray-500">Home</a>
        <a href='#services' className="capitalize text-[13px] hover:border-b-1 leading-[0.95] transition-all text-gray-500">Services</a>
        <a href='#work' className="capitalize text-[13px] hover:border-b-1 leading-[0.95] transition-all text-gray-500">Our Work</a>
        <a href='#contact-us' className="capitalize text-[13px] hover:border-b-1 leading-[0.95] transition-all text-gray-500">Contact Us</a>
      </div>

      <div className="flex items-center gap-4">
        <div className="md:w-6 md:h-6 w-8 h-8 rounded-full border-1 flex items-center justify-center -rotate-45 text-xl md:text-base"><MdOutlineNightlight /></div>
        <a href='#contact-us' className="button md:flex hidden bg-[#5044E5] py-2 px-8 rounded-full items-center gap-2 text-white text-xs ">Connect <FaArrowRight />
        </a>
        <div 
          onClick={() => setIsOpen(true)}
          className="md:hidden text-3xl cursor-pointer"
        ><CgMenuRight /></div>
      </div>

    </div>
  )
}

export default Navbar
