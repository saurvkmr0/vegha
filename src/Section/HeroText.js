import React from 'react'
import '../styles/button-outline.css'

const HeroText = () => {
  return (
    <div  className=''>
        {/* <div className="bg-red-500 w-[500px] h-[500px]">Home</div> */}
        <div className="w-full max-w-[800px] text-white flex flex-col gap-6 md:gap-10">
            <p className=" text-xl">// Digital it solution</p>
            <p className="text-5xl md:text-7xl 2xl:text-[100px]  font-bold">Digital Services & IT Solutions</p>
            <p className=" text-xl">With every single one of our clients, we bring forth a deep passion for creative problem solving which is what we deliver</p>
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 ">
                <button className='button font-bold text-base py-4 px-8 max-w-[220px] '>Read More</button>
                <button className='button-outline font-bold text-base py-4 px-8 max-w-[220px] '>Our Services</button>
            </div>
        </div>
    </div>
  )
}

export default HeroText