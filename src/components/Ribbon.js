import React from 'react'
import { FaDotCircle } from "react-icons/fa";
import { FaStarOfLife } from "react-icons/fa";
import { FaQuestion } from "react-icons/fa";
import { FaHashtag } from "react-icons/fa";

const Ribbon = () => {
  return (
    <div>
    <div className="relative overflow-hidden bg-primeBlue h-14 lg:h-28 flex items-center font-bold text-white text-xl lg:text-6xl my-16">
        <div className="absolute whitespace-nowrap animate-scroll px-8 flex gap-20 items-center">
            <span className="mr-8">DATA TRACKING SECURITY</span>
            <p className='text-4xl'><FaDotCircle className='text-white'/></p>

            <span className="mr-8 stroke-text">IT MANAGEMENT SERVICES</span>
            <p className=' text-xl lg:text-4xl'><FaStarOfLife className='text-white'/></p>

            <span className="mr-8">TECHNOLOGY SOLUTION</span>
            <p className='text-xl lg:text-4xl'><FaDotCircle className='text-white'/></p>

            <span className="mr-8 stroke-text">IT COUNSALTANCY</span>
            <p className='text-xl lg:text-4xl'><FaQuestion className='text-white'/></p>

            <span className="mr-8">WEBSITE & MOBILE DESIGN</span>
            <p className='text-xl lg:text-4xl'><FaHashtag className='text-white'/></p>

            {/* repetition */}
            <span className="mr-8">DATA TRACKING SECURITY</span>
            <p className='text-xl lg:text-4xl'><FaStarOfLife className='text-white'/></p>

            <span className="mr-8 stroke-text">IT MANAGEMENT SERVICES</span>
            <p className='text-xl lg:text-4xl'><FaHashtag className='text-white'/></p>

            <span className="mr-8">TECHNOLOGY SOLUTION</span>
            <p className='text-xl lg:text-4xl'><FaStarOfLife className='text-white'/></p>

            <span className="mr-8 stroke-text">IT COUNSALTANCY</span>
            <p className='text-xl lg:text-4xl'><FaHashtag className='text-white'/></p>

            <span className="mr-8">WEBSITE AND MOBILE DESIGN</span>
            <p className='text-xl lg:text-4xl'><FaDotCircle className='text-white'/></p>
        </div>
    </div>
</div>



  )
}

export default Ribbon