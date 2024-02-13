"use client"
import gsap from 'gsap'
import React, { useEffect } from 'react'
import { useState } from 'react'
function Introduction() {
  const [loadingValue, setLoadingValue] = useState<number>(0)
  const [loadFinish, setLoadFinish] = useState<boolean>(false)
  useEffect(() => {
    const loadingCount = () => {
      if (loadingValue < 100) {
        const increment = Math.floor(Math.random() * 10) + 1;
        setLoadingValue(prevValue => Math.min(prevValue + increment, 100)); // Ensure the loading value doesn't exceed 100
      }
      else {
        setLoadFinish(true)
      }
    }
    const delay = Math.floor(Math.random() * 500) + 10;
    setTimeout(loadingCount, delay);

  }, [loadingValue]);

  interface ScrollTriggerOptions {
    trigger: string | Element | null;
    start?: string;
    end?: string;
    toggleActions?: string;
    scrub?: boolean;
    markers?: boolean;
  }

  const LetsPlay = () => {
    const scrollTriggerOne: ScrollTriggerOptions = {
      trigger: ".overlay",
      start: 'top bottom',
      end: 'bottom top',
      scrub: false,
      markers: false
    };

    gsap.to('.wall', 1.5, {
      height: 0,
      delay: 0.5,
      stagger: {
        amount: 1
      },
      ease: "power4.inOut"
      // scrollTrigger: scrollTriggerOne
    });
  };


  return (
    <div className='absolute z-50 overlay bg-transparent h-screen w-full overflow-x-hidden overflow-y-hidden'>
      <div className='relative flex flex-row w-full h-screen border z-0'>
        <div className='wall h-screen w-[10vw] bg-black'></div>
        <div className='wall h-screen w-[10vw] bg-black'></div>
        <div className='wall h-screen w-[10vw] bg-black'></div>
        <div className='wall h-screen w-[10vw] bg-black'></div>
        <div className='wall h-screen w-[10vw] bg-black'></div>
        <div className='wall h-screen w-[10vw] bg-black'></div>
        <div className='wall h-screen w-[10vw] bg-black'></div>
        <div className='wall h-screen w-[10vw] bg-black'></div>
        <div className='wall h-screen w-[10vw] bg-black'></div>
        <div className='wall h-screen w-[10vw] bg-black'></div>
        <div className='wall h-screen w-[10vw] bg-black'></div>
        <div className='wall h-screen w-[10vw] bg-black'></div>
        <div className='wall h-screen w-[10vw] bg-black'></div>
        <div className='wall h-screen w-[10vw] bg-black'></div>
        <div className='wall h-screen w-[10vw] bg-black'></div>
        <div className='wall h-screen w-[10vw] bg-black'></div>
      </div>


      <div className='text-[100px] text-white absolute bottom-10 w-full flex justify-end px-10 z-20'>
        <button onClick={LetsPlay} disabled={loadingValue < 100} className={`${loadingValue === 100 ? "text-violet-500" : "text-white"} text-[100px] duration-300`}>
          {loadingValue === 100 ? "PLAY" : loadingValue}
        </button>
      </div>
    </div>
  )
}

export default Introduction