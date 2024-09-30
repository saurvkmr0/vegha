import React from 'react'
import { GiTrophiesShelf } from "react-icons/gi";

const Consultation = () => {
  return (
    <div className='mx-4 lg:mx-40 my-20 rounded-lg bg-primeBlue flex flex-col gap-8 lg:flex-row justify-center items-center py-20'>
        <div className="text-white text-4xl font-semibold px-16 text-center lg:text-right lg:max-w-[500px]">Get your free web consultation</div>
        <div className="bg-white w-fit rounded-[50%] p-4 hover:bg-black hover:text-white"><GiTrophiesShelf className='text-7xl'/></div>
        <div className="text-white text-4xl font-semibold px-16 text-center lg:text-left lg:max-w-[500px]">Top Award Winning Services</div>
    </div>
  )
}

export default Consultation