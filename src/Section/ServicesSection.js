import React from 'react'
import SectionHeading from '../components/SectionHeading'
import ServiceCard from '../components/ServiceCard'
import { GoDatabase } from "react-icons/go";
import { RxGlobe } from "react-icons/rx";
import { GrShieldSecurity } from "react-icons/gr";

const ServicesSection = () => {
  return (
    <div className="">
      <SectionHeading subHeading="Services we provide" heading="Explore Our Services For Modern Technology"/>
      
      <div className="lg:flex lg:justify-around w-full lg:px-[120px] my-16">

        <div className="mx-4 mt-8 flex flex-col gap-4">
          <ServiceCard heading="Data Visualization" discp="Leverage agile frameworks to provide a robust synopsis" icon={<GoDatabase />}/>
          <ServiceCard heading="Digital Marketing" discp="Leverage agile frameworks to provide a robust synopsis" icon={<RxGlobe />} shiftRight={true}/>
          <ServiceCard heading="Security System" discp="Leverage agile frameworks to provide a robust synopsis" icon={<GrShieldSecurity />}/>
        </div>

        <div className="hidden xl:flex xl:justify-center"><img className="object-contain w-full h-full" src='https://dev242.kodesolution.com/techon/wp-content/uploads/2024/08/about-img1.png'/></div>

        <div className="mx-4 mt-8 flex flex-col gap-4 xl:w-[392px]">
        <ServiceCard heading="Data Visualization" discp="Leverage agile frameworks to provide a robust synopsis" icon={<GoDatabase />}/>
        <ServiceCard heading="Digital Marketing" discp="Leverage agile frameworks to provide a robust synopsis" icon={<RxGlobe />} shiftLeft={true}/>
        <ServiceCard heading="Security System" discp="Leverage agile frameworks to provide a robust synopsis" icon={<GrShieldSecurity />}/>
      </div>

      </div>

    </div>
  )
}

export default ServicesSection