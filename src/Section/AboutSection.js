import React from 'react'
import AboutImg from '../assets/about-img.jpg'
import { FaCheckCircle } from "react-icons/fa";
import BlueHrLine from '../components/BlueHrLine';


const AboutSection = () => {
  return (
<div className="px-4 lg:px-8 xl:px-40 xl:flex">
    <div className="w-full xl:w-1/2 relative">
        <div className="z-10 absolute top-8 left-[-50px] text-white bg-primeBlue px-8 py-4 w-fit hidden 2xl:block">
            <p className="text-4xl font-bold">25+</p>
            <p className="text-xl">Experience</p>
        </div>
        <div className="relative group">
            <img 
                className=" w-auto " 
                src={AboutImg} 
                alt="About" 
            />
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0),rgba(255,255,255,0.1))] animate-glare" />
        </div>
    </div>

    <div className="w-full gap-4 xl:gap-2 pt-4 lg:pt-0 flex flex-col xl:justify-between xl:w-1/2 my-4 xl:my-0 xl:pl-4">
        <div className="flex flex-col gap-4 ">
            <BlueHrLine />
            <p className='text-gray-500 text-xl font-semibold md:text-lg'>ABOUT US</p>
            <p className='text-[#2a2a2a] text-3xl font-bold md:text-3xl lg:text-4xl'>Empowering businesses through innovative</p>
        </div>
            <p className='text-gray-500 text-lg md:text-lg'>Aliquam eros justo, posuere lobortis viverr augue mattis fermentum non ullamcorper viverra laoreet augue. Aliquam eros justo, posuere lobortis non, viverra laoreet augue mattis fermentum non ullamcorper</p>
        <div className="">
            <p className="flex items-center gap-4 text-lg md:text-lg font-normal pb-2"><FaCheckCircle className='text-primeBlue text-2xl'/>Mistakes To Avoid to the dummy printing has bees ind</p>
            <p className="flex items-center gap-4 text-lg md:text-lg font-normal pb-2"><FaCheckCircle className='text-primeBlue text-2xl'/>Your Startup industry standard loream saum</p>
            <p className="flex items-center gap-4 text-lg md:text-lg font-normal pb-2"><FaCheckCircle className='text-primeBlue text-2xl'/>Knew About Fonts text the printing and something do</p>
        </div>
        <button className='button font-bold text-base py-4 px-6 max-w-[250px] 2xl:w-[240px]'>EXPLORE NOW</button>
    </div>
</div>
)
}

export default AboutSection