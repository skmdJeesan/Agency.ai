import React, { useRef } from 'react'
import assets from '../assets/assets'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './Navbar.css'

gsap.registerPlugin(ScrollTrigger);

function Footer({theme, setTheme}) {
  const footerRef = useRef()

  useGSAP(() => {
    gsap.from('.fleft',{
      opacity: 1, x: -15,
      scrollTrigger: {trigger: '.fleft', start: 'top 120%', end: 'top 0%', markers: false,}
    })

    gsap.from('.fright',{
      opacity: 1, x: 15,
      scrollTrigger: {trigger: '.fright', start: 'top 120%', end: 'top 0%', markers: false,}
    })

    gsap.from('.fbot',{
      opacity: 1,
      scrollTrigger: {trigger: '.fbot', start: 'top 120%', end: 'top 0%', markers: false,}
    })
  }, {scope: footerRef})

  return (
    <div className='md:px-32 px-2 w-full py-10 mt-20' ref={footerRef}>

      <div className="flex md:flex-row flex-col items-center md:justify-between md:gap-0 gap-8 py-4 border-b-[1px] px-2 border-gray-400">
        <div className="fleft md:w-[35%] w-full flex flex-col gap-3">
          <img className='w-36' src={theme === 'dark' ? assets.logo_dark : assets.logo} alt="" />
          <div className="text-sm text-gray-400">From strategy to execution, we craft digital solutions that move your business forward.</div>
          <div className="flex gap-5 transition-all">

            {/* {['home', 'service', 'our work', 'contact us'].map((elem,idx) => {
              return <a key={idx} href='#' className="capitalize text-[13px] hover:text-[#5044E5] leading-[0.95] transition-all text-gray-500">{elem}</a>
            })} */}

            <a href='#' className="capitalize text-[13px] hover:text-[#5044E5] leading-[0.95] transition-all text-gray-500">Home</a>
            <a href='#services' className="capitalize text-[13px] hover:text-[#5044E5] leading-[0.95] transition-all text-gray-500">Services</a>
            <a href='work' className="capitalize text-[13px] hover:text-[#5044E5] leading-[0.95] transition-all text-gray-500">Our Work</a>
            <a href='#contact-us' className="capitalize text-[13px] hover:text-[#5044E5] leading-[0.95] transition-all text-gray-500">Contact Us</a>
          </div>
        </div>
        <div className="fright md:w-[40%] w-full flex flex-col gap-3">
          <div className="text-gray-600 -mb-2">Subscribe to our newsletter</div>
          <div className="text-sm text-gray-400">The latest news, articles, and resources, sent to your inbox weekly.</div>
          <div className="">
            <form className='flex md:justify-between gap-2'>
              <input type="text" 
                className='outline-none border-1 border-gray-500 rounded-lg w-[70%] placeholder:text-sm px-2' 
                placeholder='Enter your email' />
              <button className="button flex bg-[#5044E5] py-3 md:px-9 px-6 rounded-lg items-center gap-2 text-white md:text-xs text-sm w-fit cursor-pointer active:scale-95">Subscribe </button>
            </form>
          </div>
        </div>
      </div>

      <div className="fbot flex md:flex-row flex-col items-center md:justify-between gap-2 py-5 px-2">
        <div className="text-[13px] text-gray-500">Copyright 2025 © GreatStack - All Right Reserved.</div>
        <div className="flex gap-4 h-5">
          <a href="#"><img src={assets.facebook_icon} alt="" /></a>
          <a href="#"><img src={assets.twitter_icon} alt="" /></a>
          <a href="#"><img src={assets.instagram_icon} alt="" /></a>
          <a href="#"><img src={assets.linkedin_icon} alt="" /></a>
        </div>
      </div>
    </div>
  )
}

export default Footer
