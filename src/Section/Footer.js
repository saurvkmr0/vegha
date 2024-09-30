import React from 'react'
import logo from '../assets/Vegah With R-02.png';
import { FaFacebookF } from "react-icons/fa";
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineLocationOn } from "react-icons/md";
import { MdMailOutline } from "react-icons/md";
import { FiTwitter } from "react-icons/fi";
import { IoLogoYoutube } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";


const Footer = () => {
  return (
    <div className='mx-4 lg:mx-40 pb-16 grid gap-4 md:grid-cols-2 lg:grid-cols-4 justify-between'>

        <div className="flex flex-col gap-4">
            <div className="flex-shrink-0">
              <img src={logo} className="h-[40px]" alt="New Logo" />
            </div>
            <p className="text-gray-500 text-base max-w-[300px] md:w-auto">Lorem ipsum dolor sit amet, consect etur adi pisicing elit sed do eiusmod tempor incididunt ut labore.</p>
            <div className="flex gap-2">
                <div className='bg-primeBlue w-fit p-4 rounded-md hover:bg-[#212121] transition-colors ease-in duration-300'><FaFacebookF className='text-white text-lg'/></div>
                <div className='bg-primeBlue w-fit p-4 rounded-md hover:bg-[#212121] transition-colors ease-in duration-300'><FiTwitter className='text-white text-lg'/></div>
                <div className='bg-primeBlue w-fit p-4 rounded-md hover:bg-[#212121] transition-colors ease-in duration-300'><IoLogoYoutube className='text-white text-lg'/></div>
                <div className='bg-primeBlue w-fit p-4 rounded-md hover:bg-[#212121] transition-colors ease-in duration-300'><FaLinkedinIn className='text-white text-lg'/></div>
            </div>
        </div>

        <div className="">
            <p className="text-black text-xl font-bold">Office Information</p>
            <div className="flex items-center gap-4">
                <div className="rounded-full  w-fit p-4  hover:bg-primeBlue transition-colors ease-in duration-300 text-primeBlue hover:text-white"><LuPhoneCall className=' text-lg'/></div>
                <div className='text-gray-500 font-semibold'>+88 017 500 500 88</div>
            </div>
            <div className="flex items-center gap-4">
                <div className="rounded-full  w-fit p-4  hover:bg-primeBlue transition-colors ease-in duration-300 text-primeBlue hover:text-white"><MdMailOutline className=' text-lg'/></div>
                <div className='text-gray-500 font-semibold'>+88 017 500 500 88</div>
            </div>
            <div className="flex items-center gap-4">
                <div className="rounded-full  w-fit p-4  hover:bg-primeBlue transition-colors ease-in duration-300 text-primeBlue hover:text-white"><MdOutlineLocationOn className='text-lg'/></div>
                <div className='text-gray-500 font-semibold'>+88 017 500 500 88</div>
            </div>
        </div>

        <div className="flex flex-col gap-4">
            <p className="text-black text-xl font-bold">Get Updates</p>
            <p className="text-gray-500 text-base max-w-[300px] md:w-auto">Feel free to contact us through Twitter or Facebook if you prefer!</p>
            <div className="flex items-center">
                <div class="w-full">
                <input type="email" id="email" name="email" placeholder="Enter your email" className="mt-1 block w-full px-3 py-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                </div>
                <div className='bg-primeBlue w-fit p-4 rounded-md hover:bg-[#212121] transition-colors ease-in duration-300'><FaTelegramPlane className='text-white text-lg'/></div>
            </div>
        </div>

        <div className="">
            <p className="text-black text-xl font-bold pb-4">Office Information</p>
            <div className="flex flex-col gap-2">
                <div className='text-gray-500 '>Data Analysis</div>
                <div className='text-gray-500 '>UI/UX Designing</div>
                <div className='text-gray-500 '>Data Visualization</div>
                <div className='text-gray-500 '>Digital Marketing</div>
                <div className='text-gray-500 '>Security System</div>
            </div>
            
        </div>


        <div className=""></div>
        <div className=""></div>
    </div>
  )
}

export default Footer