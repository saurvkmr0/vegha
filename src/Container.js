import React from 'react'
import HeroSection from './Section/HeroSection'
import MouseTracker from './components/MouseTracker'
import CardSection from './Section/CardSection'
import AboutSection from './Section/AboutSection'
import Ribbon from './components/Ribbon'
import ServicesSection from './Section/ServicesSection'
import Projects from './Section/Projects'
import Pricing from './Section/Pricing'
import Offering from './Section/Offering'
import Consultation from './Section/Consultation'
import Footer from './Section/Footer'


const Container = () => {
  return (
    <div className='bg-[#fcfcfc]'>
      <MouseTracker />
      <HeroSection/> 
      <CardSection />
      <AboutSection />
      <Ribbon/>
      <ServicesSection />
      {/* <Projects/> */}
      <Pricing />
      <Offering/>
      <Consultation />
      <Footer/>
    </div>
  )
}

export default Container