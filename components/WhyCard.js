import React from 'react'

const WhyCard = ({reason}) => {
  return (
      <div className="w-full flex border border-slate-200 gap-4 flex-col rounded-lg hover:scale-105 ease-in-out duration-200 bg-slate-50 p-4 items-center hover:shadow-xl" >
          <h1 className='font-bold text-2xl text-center bg-slate-200 w-16 rounded-full h-16 p-4'>{reason.id}</h1>
          <h2 className='font-bold text-xl text-center'>{reason.title}</h2>
          <p className='text-center text-gray-500'>{reason.description}</p>
      </div>
  )
}

export default WhyCard