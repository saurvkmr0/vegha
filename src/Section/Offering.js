import React from 'react'
import { FaCheckCircle } from "react-icons/fa";
import BlueHrLine from '../components/BlueHrLine';
import { PiHandCoinsDuotone } from "react-icons/pi";
import { RxGlobe } from "react-icons/rx";
import { useEffect, useRef } from 'react';


const Offering = () => {

    const ref = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('slide-in');
                    observer.unobserve(entry.target); // Stop observing once the animation is triggered
                }
            });
        });

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

  return (
<div className="px-4 py-4 lg:px-8 2xl:px-40 xl:flex xl:flex-row-reverse bg-[#1a1b1e]">
    <div className=" relative xl:w-1/2">
        {/* <div className="z-10 absolute top-8 left-[-50px] text-white bg-primeBlue px-8 py-4 w-fit hidden 2xl:block">
            <p className="text-4xl font-bold">25+</p>
            <p className="text-xl">Experience</p>
        </div> */}
        <div className="relative group">
            <img 
                className="w-full" 
                src='https://dev242.kodesolution.com/techon/wp-content/uploads/2024/08/bg-n4-400x532.jpg'
                alt="About" 
            />
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0),rgba(255,255,255,0.1))] animate-glare" />
        </div>
    </div>

    <div className=" gap-6 pt-4 lg:pt-0 lg:pr-12 flex flex-col xl:justify-between xl:w-1/2 my-auto text-white">
        <div className="flex flex-col gap-4">
            <BlueHrLine />
            <p className='text-lg font-semibold md:text-lg'>What We’re offering</p>
            <p className='text-4xl font-bold md:text-4xl lg:text-4xl xl:text-5xl slide-in-on-scroll' ref={ref}>Let’s overcome your tech challanges</p>
        </div>
            <p className='text-base md:text-lg'>The most eminent technology and solutions consultant service The most eminent technology and solutions consultant service suffered</p>
                <div className=" flex flex-col lg:flex-row gap-6 lg:gap-10">
                    <div className="flex justify-start items-center text-2xl lg:text-5xl text-primeBlue group-hover:text-white xl:max-w-[350px]">
                        <div className="p-4 bg-gray-600 bg-opacity-30 rounded-[100%] mr-4"><PiHandCoinsDuotone className='font-light' /></div>
                        <p className='text-lg lg:text-xl text-white font-semibold'>Web Development</p>
                    </div>
                    <div className="flex justify-start items-center text-2xl lg:text-5xl text-primeBlue group-hover:text-white xl:max-w-[350px]">
                        <div className="p-4 bg-gray-600 bg-opacity-30 rounded-[100%] mr-4"><RxGlobe className='font-light' /></div>
                        <p className='text-lg lg:text-xl text-white font-semibold'>Internal Networking</p>
                    </div>
                </div>
            <p className='text-base md:text-lg'>The most eminent technology and solutions consultant service The most eminent technology and solutions consultant service suffered</p>
        <div className="">
            <p className="flex items-center gap-4 text-lg md:text-lg font-normal pb-2"><FaCheckCircle className='text-primeBlue text-2xl'/>Mistakes To Avoid to the dummy printing has bees ind</p>
            <p className="flex items-center gap-4 text-lg md:text-lg font-normal pb-2"><FaCheckCircle className='text-primeBlue text-2xl'/>Your Startup industry standard loream saum</p>
            <p className="flex items-center gap-4 text-lg md:text-lg font-normal pb-2"><FaCheckCircle className='text-primeBlue text-2xl'/>Knew About Fonts text the printing and something do</p>
        </div>
        <button className='button font-bold text-base py-4 px-6 max-w-[200px] 2xl:w-[200px]'>CONTACT US</button>
    </div>
</div>
)
}

export default Offering