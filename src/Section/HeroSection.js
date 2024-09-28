import React from 'react'
import Navbar from './Navbar'
import HeroText from './HeroText'

const HeroSection = () => {
  return (
    <div className="h-screen bg-cover bg-center hero-bg w-[full] pt-[120px] px-40">
          <Navbar />
          <div className="h-full flex items-center">
            <HeroText/> 
          </div>
    </div>
  )
}

export default HeroSection