import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Work() {

  const workRef = useRef()

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
      opacity: 0, y: 50, stagger: 0.3,
      scrollTrigger: {trigger: '.card', start: 'top 90%', end: 'top 0%', markers: false,}
    })
  },{scope: workRef})

  return (
    <div 
      id='work' 
      className='h-[90vh] w-full md:px-24 flex flex-col gap-7 items-center justify-start md:py-20 md:mt-10 mt-40'
      ref={workRef}
    >
      <div className="title md:text-5xl text-2xl">Our latest work</div>
      <div className="subtitle text-base md:w-[35vw] w-[90%] text-gray-400 text-center">From strategy to execution, we craft digital solutions that move your business forward.</div>
      <div className="card flex md:flex-row flex-col md:gap-2 gap-10 w-[80%]">
        <div className="flex flex-col gap-2 md:p-3 hover:scale-105 transition-transform">
          <div className="md:w-[21vw] w-full h-[27vh]">
            <img src="https://agency4ai.in/assets/work_mobile_app-C3Sz8-bL.png" alt="" className="h-full w-full" />
          </div>
          <h2 className="text-base">Mobile app marketing</h2>
          <h4 className="text-sm text-gray-500">We turn bold ideas into powerful digital solutions that connect, engage...</h4>
        </div>
        <div className="flex flex-col gap-2 md:p-3 hover:scale-105 transition-transform">
          <div className="md:w-[21vw] w-full h-[27vh]">
            <img src="https://agency4ai.in/assets/work_dashboard_management-B95Y9g_p.png" alt="" className="h-full w-full" />
          </div>
          <h2 className="text-base">Dashboard management</h2>
          <h4 className="text-sm text-gray-500">We help you execute your plan and deliver results.</h4>
        </div>
        <div className="flex flex-col gap-2 md:p-3 hover:scale-105 transition-transform">
          <div className="md:w-[21vw] w-full h-[27vh]">
            <img src="https://agency4ai.in/assets/work_fitness_app-DbcNwP80.png" alt="" className="h-full w-full" />
          </div>
          <h2 className="text-base">Fitness app promotion</h2>
          <h4 className="text-sm text-gray-500">We help you create a marketing strategy that drives results.</h4>
        </div>
      </div>
    </div>
  )
}

export default Work
