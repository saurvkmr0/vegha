import React from 'react'
import BlueHrLine from './BlueHrLine'

const ServicesHeading = () => {
  return (
    <div className='px-16 flex flex-col items-center text-center gap-4'>
      <BlueHrLine/>
      <p className='text-gray-500 text-lg font-semibold md:text-xl'>Services we provide</p>
      <p className='text-[#2a2a2a] text-4xl font-bold  md:text-5xl lg:text-6xl max-w-[800px]'>Explore Our Services For Modern Technology</p>
    </div>
  )
}

export default ServicesHeading