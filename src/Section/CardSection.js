import React from 'react'
import Card from '../components/Card'


const CardSection = () => {
  return (
    <div className='bg-transparent relative bottom-[100px] px-4 lg:px-8 2xl:px-40 grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-x-8 gap-y-4'>
        
        <Card />
        <Card />
        <Card />
        <Card />

    </div>
  )
}

export default CardSection