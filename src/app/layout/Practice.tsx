"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useInView } from "react-intersection-observer";

function Practice() {
  const { ref, inView } = useInView()
  const [showFirstImage, setShowFirstImage] = useState(true);




  useEffect(() => {
    // Alternate between showing the first and second image every 2 seconds
    const intervalId = setInterval(() => {
      setShowFirstImage((prevShowFirstImage) => !prevShowFirstImage);
    }, 2000);

    return () => clearInterval(intervalId);
  }); // Run once on component mount

  console.log(inView)
  return (
    <div ref={ref} data-scroll data-scroll-speed="1" className='bg-illu_003 bg-cover bg-no-repeat h-screen w-full flex items-center justify-center relative overflow-y-hidden'>
      <Image  src={"/assets/Hiroko/BTU_Website_Illus003_Hiroko_option.png"} alt='Hiroko' width={1200} height={0} className='' />

      <img  data-scroll-speed="1"  src={"/assets/Hiroko/BTU_Website_Illus003_FXTop.png"} alt='Hiroko'
        className={`${inView ? "block" : "hidden"} ${showFirstImage ? "opacity-100" : "opacity-0"} w-full absolute transition duration-700 animate-pulse`} />

      <img src={"/assets/Hiroko/BTU_Website_Illus003_FXBack.png"} alt='Hiroko'
        className={`${inView ? "block" : "hidden"} ${showFirstImage ? "opacity-0" : "opacity-100"} w-full absolute  transition duration-700 animate-pulse`} />
    </div>
  )
}

export default Practice