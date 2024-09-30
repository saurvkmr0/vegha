import React from 'react'
import SectionHeading from '../components/SectionHeading'
import PriceCard from '../components/PriceCard'

const Pricing = () => {
  return (
    <div className="">
        <SectionHeading subHeading="Our pricing plans" heading="Choose your optimal pricing plans"/>

        <div className="my-16 flex flex-col px-4 lg:flex lg:flex-row gap-4 sm:flex-wrap md:justify-center">
            <PriceCard price="39" text1="Network Security Audit" text2="Support Management" text3="Cyber Security" text4="24/7 Remote Support"/>
            <PriceCard price="99" text1="Data Backup And Recovery" text2="Network Security Audit" text3="Cybersecurity Training" text4="24/7 Remote Support"/>
            <PriceCard price="199" text1="Migration Consultation" text2="Network Security Audit" text3="Cyber Security" text4="24/7 Remote Support"/>
            
        </div>

    </div>
  )
}

export default Pricing