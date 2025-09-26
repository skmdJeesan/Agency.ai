import React, { useRef } from 'react'
import Form from './Form'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Contact() {
  const contactRef = useRef()

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
  },{scope: contactRef})

  return (
    <div id='contact-us' className='md:px-24 px-2 h-[90vh] w-full flex flex-col gap-7 items-center justify-start md:py-20 py-10 md:mt-0 mt-[60vh]' ref={contactRef}>
      <div className="title md:text-5xl text-2xl">Reach out to us</div>
      <div className="subtitle text-base md:w-[35vw] text-gray-500 text-center">From strategy to execution, we craft digital solutions that move your business forward.</div>
      <Form />
    </div>
  )
}

export default Contact
