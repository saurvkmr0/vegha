import React from 'react'
import Navbar from './Navbar'
import HeroText from './HeroText'


const HeroSection = () => {
  return (
    <div className="bg-cover bg-center hero-bg h-screen w-full px-0 lg:px-40">
          <Navbar />
          <div className="h-full flex items-center px-4">
            <HeroText/> 
          </div>
    </div>
  )
}

export default HeroSection