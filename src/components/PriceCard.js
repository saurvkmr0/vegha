import React from 'react'
import { FaCheckCircle } from "react-icons/fa";
import { GiTakeMyMoney } from "react-icons/gi";

const PriceCard = ({price,text1,text2,text3,text4}) => {
  return (
    <div>
        <div className="rounded-md overflow-hidden shadow-lg bg-white p-8 md:w-full lg:w-[400px] border border-primeBlue">
            <div className="pb-8 flex justify-between">
                <GiTakeMyMoney className='text-6xl text-primeBlue'/>
                <div className="flex gap-4 items-center">
                    <p className='font-bold text-xl'>Save</p>
                    <p className="font-bold text-lg text-white bg-primeBlue h-fit px-2 py-1 rounded-md">23%</p>
                </div>
            </div>
            <h2 className="text-2xl font-bold text-black mb-4">Regular Plan</h2>
            <p className="text-6xl font-semibold text-gray-800 mb-4">${price}/<span className="text-base font-semibold text-gray-500"> per month</span></p>
                <div className="my-8">
                    <p className="flex items-center gap-4 text-lg md:text-lg font-semibold pb-2"><FaCheckCircle className='text-primeBlue text-2xl'/>{text1}</p>
                    <p className="flex items-center gap-4 text-lg md:text-lg font-semibold pb-2"><FaCheckCircle className='text-primeBlue text-2xl'/>{text2}</p>
                    <p className="flex items-center gap-4 text-lg md:text-lg font-semibold pb-2"><FaCheckCircle className='text-primeBlue text-2xl'/>{text3}</p>
                    <p className="flex items-center gap-4 text-lg md:text-lg font-semibold pb-2"><FaCheckCircle className='text-primeBlue text-2xl'/>{text4}</p>
                </div>
        
            <button className="button px-6 py-4 font-bold">
                Get Started
            </button>
            </div>
    </div>
  )
}

export default PriceCard