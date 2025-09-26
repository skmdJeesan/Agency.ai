import React, { useRef } from 'react'
import { company_logos } from '../assets/assets'
import assets from '../assets/assets'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const homeRef = useRef()
  useGSAP(() => {
    let tl = gsap.timeline()
    tl.from('.trusted', {opacity: 0, y: 10, duration: 0.3, delay: 1})
    tl.from('.turning', {opacity: 0, y: 10, duration: 0.3})
    tl.from('.creating', {opacity: 0, y: 10, duration: 0.3})
    tl.from('.img', {opacity: 0, scale: 0.5, duration: 0.7})

    gsap.from('.company',{
      opacity: 0, y: 20,
      scrollTrigger: {trigger: '.company', markers: false, start: 'top 90%', end: 'top -20%'}
    })

    gsap.from('.logo',{
      opacity: 0, y: 20, duration: 0.1, stagger: 0.2,
      scrollTrigger: {trigger: '.logos', markers: false, start: 'top 90%', end: 'top -20%'}
    })
  }, {scope: homeRef})

  return (
    <div 
      id=''
      className={`min-h-screen w-full md:mt-15 mt-20 flex flex-col md:gap-10 gap-8 items-center py-20 md:px-24 px-4 md:bg-center bg-cover md:mb-0 mb-20`}
      style={{ backgroundImage: `url(${assets.bgImage1})` }}
      ref={homeRef}
    >

      <div className="trusted flex items-center gap-2 border-[1px] rounded-full py-1 px-2 border-gray-400">
        <div className="w-18 flex">
          <img className='h-full w-full object-cover' src="https://agency4ai.in/assets/group_profile-B4SEylet.png" alt="" />
        </div>
        <div className="text-xs">Trusted by 10k+ people</div>
      </div>

      <div className="turning md:text-7xl text-4xl text-[#364153] md:w-[65vw] w-full text-center leading-[1.07]">Turning imagination into <span className='text-[#5044E5]'>digital</span> impact.</div>

      <div className="creating md:text-lg text-sm md:w-[40vw] w-[70vw] text-center text-gray-500 leading-[1.2]">Creating meaningful connections and turning big ideas into interactive digital experiences.</div>

      <img className='img md:w-[80vw] w-full md:h-[85vh] h-[27vh] shadow-xl md:rounded-4xl rounded-2xl' src="https://agency4ai.in/assets/hero_img-ySDs5NA2.png" alt="" />

      <div className="flex flex-col justify-between md:w-[50vw] w-full items-center gap-10 mt-10 md:px-0 px-4">
        <div className="text-gray-600 company">Trusted by Leading Companies</div>
        <div className="logos w-full flex md:flex-nowrap flex-wrap md:gap-0 gap-8 items-center justify-between">
          {company_logos.map((elem,idx) => {
            return <div key={idx} className="logo md:w-[6vw] w-[18vw]">
              <img className='h-full w-full object-cover' src={elem} alt="" />
            </div>
          })}
        </div>
      </div>

    </div>
  )
}

export default Home
