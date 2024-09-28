import React from 'react'
import '../styles/button-outline.css'

const HeroText = () => {
  return (
    <div  className=''>
        <div className="w-[800px] text-white">
            <p className=" text-xl">// Digital it solution</p>
            <p className=" text-[100px] font-bold">Digital Services & IT Solutions</p>
            <p className=" text-xl">With every single one of our clients, we bring forth a deep passion for creative problem solving which is what we deliver</p>
            <div className="flex gap-8">
                <button className='button font-bold mt-14'>Read More</button>
                <button className='button-outline font-bold mt-14'>Our Services</button>
            </div>
        </div>
    </div>
  )
}

export default HeroText