import React from 'react'

function Member({obj}) {
  return (
    <div className='flex md:flex-row flex-col items-center bg-white/90 shadow-xl p-2 rounded-xl md:w-[20%] w-[45%] md:justify-center md:gap-2 gap-6 md:h-[10vh] h-[20vh] hover:scale-105 transition-transform'>
      <div className="img-div h-14 w-14 rounded-full overflow-hidden">
        <img src={obj.image} alt="" className='h-full w-full object-cover'/>
      </div>
      <div className="text-xs">
        <h2 className='text-black'>{obj.name}</h2>
        <h2 className='text-gray-500'>{obj.title}</h2>
      </div>
    </div>
  )
}

export default Member
