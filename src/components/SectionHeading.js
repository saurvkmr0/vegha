import React from 'react'
import BlueHrLine from './BlueHrLine'
import { useEffect, useRef } from 'react';

const SectionHeading = ({subHeading,heading}) => {

  const ref = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('slide-in');
                    observer.unobserve(entry.target); // Stop observing once the animation is triggered
                }
            });
        });

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);


  return (
    <div className={`px-16 flex flex-col items-center text-center gap-4 slide-in-on-scroll`}  ref={ref}>
      <BlueHrLine/>
      <p className='text-gray-500 text-lg font-semibold md:text-xl'>{subHeading}</p>
      <p className='text-[#2a2a2a] text-4xl font-bold  md:text-4xl lg:text-5xl max-w-[800px]'>{heading}</p>
    </div>
  )
}

export default SectionHeading