import React from 'react'
import Card from '../components/Card'
import { GrServices } from "react-icons/gr";
import { TbCloudComputing } from "react-icons/tb";
import { GrTechnology } from "react-icons/gr";


const CardSection = () => {
  return (
    <div className='bg-transparent relative bottom-[100px] px-4 lg:px-8 xl:px-40 grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-x-8 gap-y-8'>
        
        <Card icon={<GrServices className='text-6xl'/>} heading="Managed Services" subheading="Write a short description, that will describe useful."/>
        <Card icon={<TbCloudComputing className='text-6xl'/>} heading="Cloud Computing" subheading="Write a short description, that will describe useful."/>
        <Card icon={<GrTechnology className='text-6xl'/>}heading="Technology Consulting" subheading="Write a short description, that will describe useful."/>
        
        {/* <Card /> */}

    </div>
  )
}

export default CardSection