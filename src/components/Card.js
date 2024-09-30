import React from 'react'
import '../styles/card.css'
import { FaArrowRight } from "react-icons/fa6";

const Card = ({icon,heading,subheading}) => {
  return (
    <div className="hover:bg-gray-300 transition-colors ease-in duration-300 rounded-lg">

    
      <div class=" relative py-20 min-w-[320px] bg-[#fcfcfc] text-primeBlue hover:bg-primeBlue transition-colors ease-in duration-300 hover:text-white p-6 rounded-t-lg shadow-lg overflow-hidden skewed-card">
    {/* <!-- Card Content --> */}
    <div class="relative z-10 ">
        <div class="flex justify-center items-center mb-4">
            {icon}
            
        </div>

        <h2 class="text-2xl font-bold">{heading}</h2>
        <p class="mt-2">{subheading}</p>

        <div class="mt-4 flex items-center">
            <a href="#" class=" flex items-center">
                <span>Read More</span>
                <FaArrowRight />
            </a>
        </div>
    </div>
</div>



    </div>
  )
}

export default Card