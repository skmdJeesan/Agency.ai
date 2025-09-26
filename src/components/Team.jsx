import React, { useRef } from 'react'
import { teamData } from '../assets/assets'
import Member from './Member'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Team() {
  const teamRef = useRef()

  useGSAP(() => {
    gsap.from('.title',{
      opacity: 0, x: 40,
      scrollTrigger: {trigger: '.title', start: 'top 90%', end: 'top 0%', markers: false,}
    })

    gsap.from('.subtitle',{
      opacity: 0, x: -40,
      scrollTrigger: {trigger: '.subtitle', start: 'top 90%', end: 'top 0%', markers: false,}
    })

    gsap.from('.card',{
      opacity: 0, y: 50, stagger: 0.2,
      scrollTrigger: {trigger: '.card', start: 'top 90%', end: 'top 0%', markers: false,}
    })
  },{scope: teamRef})

  return (
    <div className='md:px-24 px-4 h-[70vh] w-full flex flex-col gap-7 items-center justify-start py-10 md:mt-0 mt-[70vh]' ref={teamRef}>
      <div className="title md:text-5xl text-2xl">Meet the team</div>
      <div className="subtitle text-base md:w-[35vw] w-[90%] text-gray-400 text-center">A passionate team of digital experts dedicated to your brands success.</div>
      <div className="card flex w-[90%] flex-wrap gap-6 py-10 items-center justify-center">
        {teamData.map((obj,idx) => {
          return <Member key={idx} obj={obj} />
        })}
      </div>
    </div>
  )
}

export default Team
