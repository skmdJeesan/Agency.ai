import React, { useState } from 'react'
import { FaArrowRight } from "react-icons/fa6";

function Form() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('')

  const submitHandler = (e) => {
    e.preventDefault();
    //console.log('Form submited');
    setName('');
    setEmail('');
    setMessage('');
  }

  return (
    <div className='w-full flex flex-col md:items-center mt-7 h-[70vh] justify-start py-2'>
      <form 
        className='flex flex-col md:items-start items-center gap-5 md:w-[50vw]' 
        onSubmit={(e) => submitHandler(e)}>
        <div className="flex md:flex-row flex-col items-center md:gap-7 gap-5 w-full">
          <div className="card flex flex-col gap-2 w-[90%]">
            <label htmlFor="name" className='text-sm'>Your Name</label>
            <input 
              value={name}
              onChange={(e) => setName(e.target.value)}
              className='border-1 rounded-xl px-4 py-2 border-gray-400 outline-none w-full placeholder:text-sm' 
              type="text" placeholder='Enter your name' required id='name'/>
          </div>
          <div className="card flex flex-col gap-2 w-[90%]">
            <label htmlFor="email" className='text-sm'>Email Id</label>
            <input 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='border-1 rounded-xl px-4 py-2 border-gray-400 outline-none w-full placeholder:text-sm' 
              type="email" placeholder='Enter your email' required id='email'/>
          </div>
        </div>
        <div className="flex flex-col gap-2 md:w-full w-[90%]">
          <label htmlFor="message" className="text-sm">Message</label>
          <textarea 
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="card border-1 rounded-xl px-4 py-2 border-gray-400 outline-none w-full placeholder:text-sm" 
            placeholder='Enter your message' required cols="30" rows="7" id='message'/>
        </div>
        <div className="w-full flex item-start md:px-0 px-4">
          <button className="card button flex bg-[#5044E5] py-3 px-9 rounded-full items-center gap-2 text-white text-xs w-fit  cursor-pointer active:scale-95">Submit <FaArrowRight /></button>
        </div>
      </form>
    </div>
  )
}

export default Form
