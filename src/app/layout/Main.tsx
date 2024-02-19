"use client"
import { AnimatePresence, motion } from 'framer-motion'
import gsap from 'gsap';
import Image from 'next/image';
import { useState, useEffect } from 'react'
import React from 'react'
import { useInView } from "react-intersection-observer";
import { Lexend } from 'next/font/google';

const lexend = Lexend({
  subsets: ['latin'],
  weight: ['400','500','700'],
})

type Props = {
  viewSecondPage:boolean
}
function Main({viewSecondPage}:Props) {
  const { ref, inView } = useInView();
  const [show, setShow] = useState(false)
  const [scrollY, setScrollY] = useState<number>(0)
  const [showText, setShowText] = useState<boolean>(false)


  useEffect(() => {

    const ScrollPosition = () => {
      const currentPosition = window.scrollY;
      setScrollY(currentPosition);
    }
    window.addEventListener('scroll', ScrollPosition)
    return () => {
      window.addEventListener('scroll', ScrollPosition)
    }
  }, [])
  console.log(scrollY)

  setTimeout(() => {
    setShow(true)
  }, 2500)

  useEffect(() => {
    const ShowText = () => {
      gsap.to('.btu', 1.5, {
        x: "60%",
        duration: 3
      });
    };

    const HideText = () => {
      gsap.to('.btu', {
        x: "0px",
        duration: 1.5
      });
    };

    if (scrollY > 0) {
      ShowText();
    } else if (scrollY < 40) {
      // Cancel any existing tweens before creating a new one
      gsap.killTweensOf('.btu');
      HideText();
    }
  }, [scrollY])

  return (
    <div data-scroll data-scroll-speed="0" className={`relative h-screen top-0 bg-illu_001 bg-cover bg-no-repeat w-full overflow-x-hidden z-10`}>

      <div className='h-screen w-full flex flex-col lg:flex-row items-center justify-center px-5 z-0'>

        {/* BTU CHARACTERS */}
        <div className='relative bottom-20 lg:bottom-auto w-full flex border-red-500 justify-center lg:justify-end h-screen lg:pr-[50px]'>
          <Image alt='characters' width={2000} height={100} src='/assets/Illus001/Illu01CH.png' loading='lazy'  className='z-30 min-w-[300px] w-[500px] sm:w-[500px] lg:w-[600px] xl:w-[700px] bottom-0 absolute' />
          {/* <img src='/assets/Illus001/BTU_Website_Illus001_Yosuke.png' className='z-30 w-[100vw] min-w-[600px] max-w-[900px] absolute' />
          <img src='/assets/Illus001/BTU_Website_Illus001_Chop.png' className='z-30 w-[100vw] min-w-[600px] max-w-[900px] absolute' /> */}
        </div>
        {/* BTU FLOOR */}
        <div className='h-screen w-full absolute overflow-y-hidden'>
          <Image alt='floor' width={2000} height={100} src='/assets/Illus001/Illu01floor.png' loading='lazy' className='absolute bottom-0 w-full h-[20vh] lg:h-[12vh] opacity-65' />
        </div>

        {/* BTU BACKGROUND */}
        <Image alt='characters' width={2000} height={100} src='/assets/Illus001/LOGOBG.png' loading='lazy' className={` hidden lg:block btu top-20 sm:top-none absolute lg:w-[80%]`} />
        <Image alt='characters' width={2000} height={100} src='/assets/Illus001/LOGOBG.png' loading='lazy' className={` absolute top-32 xs:top-20 sm:top-none lg:hidden w-[100vw]`} />
        
        <div className='w-full absolute h-screen flex items-center'>
          <div className={`${lexend.className} hidden lg:w-[600px] xl:w-[800px] lg:absolute left-[2%] lg:flex flex-col space-y-5 px-5 relative`}>
            <AnimatePresence>
              {
                scrollY > 0 && (
                  <>
                    <motion.p
                      key="paragraph1"
                      initial={{ y: 15, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 15, opacity: 0 }}
                      transition={{ duration: 0.5, delay: 0 }}
                      className={` text-white lg:text-2xl xl:text-[30px]`}>
                      Beat Them Up is renewing the entertainment industry by creating the first VISUAL, MUSICAL & Social 360 IP!
                    </motion.p>
                    <motion.p
                      key="paragraph2"
                      initial={{ y: 15, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 15, opacity: 0 }}
                      transition={{ duration: 0.5, delay: 0.25 }}
                      className='lg:text-xl xl:text-[25px] text-white'
                    >
                      It is a shonen anime about music but foremost, a story about art and creativity…
                    </motion.p>
                    <motion.p
                      key="paragraph3s"
                      initial={{ y: 15, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 15, opacity: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      className='lg:text-xl xl:text-[25px] text-white'
                    >
                      So, put a vinyl on your turntable, connect your headphones, turn on the volume and push the Play button…
                    </motion.p>

                  </>
                )
              }
            </AnimatePresence>
          </div>
        </div>


      </div>
    </div >
  )
}

export default Main