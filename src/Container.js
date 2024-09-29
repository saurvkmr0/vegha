import React from 'react'
import HeroSection from './Section/HeroSection'
import MouseTracker from './components/MouseTracker'
import CardSection from './Section/CardSection'
import AboutSection from './Section/AboutSection'
import Ribbon from './components/Ribbon'


const Container = () => {
  return (
    <div className='bg-[#fcfcfc]'>
      <MouseTracker />
      <HeroSection/> 
      <CardSection />
      <AboutSection />
      <Ribbon/>
    </div>
  )
}

export default Container