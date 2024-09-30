import React from 'react'


const ServiceCard = ({heading,discp,icon,shiftRight,shiftLeft}) => {
  return (
    <div className={`flex relative overflow-hidden group py-8 rounded-md pr-4 xl:w-[392px] ${shiftRight && 'xl:right-[100px]'} 
    ${shiftLeft && 'xl:left-[100px]'}`}>
    <span className="z-[1] absolute inset-0 bg-primeBlue transition-transform duration-500 ease-in-out transform scale-x-0 group-hover:scale-x-100 origin-left"></span>
        <div className="z-[10] flex">
            <div className="flex justify-start items-center text-7xl px-4  text-primeBlue group-hover:text-white">
                {icon}
            </div>
            <div>
                <p className="text-[#2a2a2a] text-2xl font-bold group-hover:text-white">{heading}</p>
                <p className="text-gray-500 text-lg font-normal md:text-xl group-hover:text-white">{discp}</p>
            </div>
        </div>
  
  
</div>

  )
}

export default ServiceCard