import React from 'react'
import HeroSection from './Section/HeroSection'
import MouseTracker from './components/MouseTracker'
import CardSection from './Section/CardSection'
import AboutSection from './Section/AboutSection'
import Ribbon from './components/Ribbon'
import ServicesSection from './Section/ServicesSection'


const Container = () => {
  return (
    <div className='bg-[#fcfcfc]'>
      <MouseTracker />
      <HeroSection/> 
      <CardSection />
      <AboutSection />
      <Ribbon/>
      <ServicesSection />
    </div>
  )
}

export default Container