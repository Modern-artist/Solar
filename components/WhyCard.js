import React from 'react'

const WhyCard = ({reason}) => {
  return (
      <div className="w-full flex gap-4 flex-col ease-in-out duration-200" >
      <div className="flex gap-4">
        {/* <img src="" alt="" /> */}
        <img className='w-12 h-12' src={`img/whyus/${reason.id}.png`} alt="" />
        <h2 className='font-semibold text-lg '>{reason.title}</h2></div>
          {/* <h1 className='       bg-slate-200 w-16 rounded-full h-16 p-4'>{reason.id}</h1> */}
          
          <p className=' text-gray-500'>{reason.description}</p>
      </div>
  )
}

export default WhyCard